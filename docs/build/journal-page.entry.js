import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { s as state, o as onChange } from './store-12fabadf.js';
import { m as madagascarCardData } from './apimock-b5e898b7.js';
import { C as CardType } from './info-definitions-0fd346da.js';

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
    this.cardData = dataMap.get(this.selected);
    console.log('new carddata', this.cardData);
    console.log('selected', this.selected);
  }
  componentWillLoad() {
    onChange('selected', (val) => {
      this.checkButtonState();
      this.cardData = dataMap.get(val);
      console.log('new carddata', this.cardData);
    });
  }
  componentDidLoad() {
    if (this.selected !== '') {
      state.selected = this.selected;
      this.cardData = dataMap.get(this.selected);
      console.log('new carddata', this.cardData);
    }
    console.log('selected', this.selected);
  }
  checkButtonState() {
    this.addDisabled = state.userDeck[state.selected] > 2;
    this.removeDisabled = !state.userDeck[state.selected] || state.userDeck[state.selected] < 1;
  }
  render() {
    var _a, _b;
    console.log('selected', this.selected);
    return (h(Host, null, (this.selected == '' || !this.selected) ?
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
