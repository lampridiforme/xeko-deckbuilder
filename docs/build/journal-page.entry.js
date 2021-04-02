import { f as getRenderingRef, i as forceUpdate, r as registerInstance, h, e as Host } from './index-37ada624.js';
import { a as madagascarCardData } from './apimock-47628813.js';
import { C as CardType } from './info-definitions-0fd346da.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

// const shouldUpdate = (newValue, oldValue, propChanged) => {
//     return JSON.stringify(newValue) !== JSON.stringify(oldValue);
// }
const { state, onChange } = createStore({
  userDeck: {},
  selected: ''
});
// onChange('selected', _value => {
//   console.log('here is the updated store: ', state.userDeck, state.selected);
// });

const journalPageCss = ":host{display:block;background-color:pink;text-align:center;overflow-y:scroll}.info{text-align:center;width:100%}";

// const dataMap: Map<string, CardData> = new Map([
//   ['mm0', {
//     id: 'mm0', 
//     name: 'Ring Tail Lemur',
//     pack: Pack.madagascar,
//     number: 1,
//     rarity: Rarity.endangered,
//     cardType: CardType.species,
//     speciesType: SpeciesType.mammal,
//     scientificName: 'Something something',
//     borders: {
//       top: new Set([]),
//       bottom: new Set([]),
//       left: new Set([]),
//       right: new Set([])
//     },
//     energy: 10,
//     points: 7,
//     level: 3,
//     rulesText: 'Rules text!',
//     flavorText: 'Flavor text!',
//     requiredLevels: null
//   }]
// ]);
const dataMap = new Map(madagascarCardData.map(entry => [entry.id, entry]));
const JournalPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // selected from url
    this.selected = '';
    this.addDisabled = false;
    this.removeDisabled = true;
    this.addToDeck = () => {
      const deckEntry = state.userDeck[state.selected];
      state.userDeck[state.selected] = (deckEntry !== 0 && !deckEntry) ? 1 : deckEntry + 1;
      state.userDeck = Object.assign({}, state.userDeck);
      this.checkButtonState();
    };
    this.removeFromDeck = () => {
      state.userDeck[state.selected] = state.userDeck[state.selected] - 1;
      state.userDeck = Object.assign({}, state.userDeck);
      this.checkButtonState();
    };
  }
  onSelectedChange() {
    state.selected = this.selected;
  }
  componentWillLoad() {
    onChange('selected', (val) => {
      this.checkButtonState();
      this.cardData = dataMap.get(val);
    });
  }
  componentDidLoad() {
    if (this.selected !== '') {
      state.selected = this.selected;
      this.cardData = dataMap.get(this.selected);
    }
  }
  checkButtonState() {
    this.addDisabled = state.userDeck[state.selected] > 2;
    this.removeDisabled = !state.userDeck[state.selected] || state.userDeck[state.selected] < 1;
  }
  render() {
    var _a, _b;
    return (h(Host, null, (state.selected === '') ?
      h("div", null, "Click on a card to learn more about it!") :
      h("div", null, h("h2", { class: 'name' }, (_a = this.cardData) === null || _a === void 0 ? void 0 : _a.name), (((_b = this.cardData) === null || _b === void 0 ? void 0 : _b.cardType) === CardType.species) ?
        h("h4", { class: 'scientific-name' }, this.cardData.scientificName) : null, h("div", null, h("span", null, "You have ", (!!state.userDeck[state.selected]) ? state.userDeck[state.selected] : 0, " in your deck."), h("button", { disabled: this.addDisabled, onClick: this.addToDeck }, "Add to Deck"), h("button", { disabled: this.removeDisabled, onClick: this.removeFromDeck }, "Remove from Deck")), h("info-article", { cardData: this.cardData }))));
  }
  static get watchers() { return {
    "selected": ["onSelectedChange"]
  }; }
};
JournalPage.style = journalPageCss;

export { JournalPage as journal_page };
