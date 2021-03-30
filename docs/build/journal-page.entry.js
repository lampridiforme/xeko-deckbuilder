import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { s as state, o as onChange } from './store-12fabadf.js';

const journalPageCss = ":host{display:block;border:5px dashed blue}";

const JournalPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  componentWillLoad() {
    onChange('selected', (val) => {
      console.log('selected changed');
      this.checkButtonState();
    });
  }
  checkButtonState() {
    this.addDisabled = state.userDeck[state.selected] > 3;
    this.removeDisabled = !state.userDeck[state.selected] || state.userDeck[state.selected] < 2;
  }
  render() {
    return (h(Host, null, (state.selected === '') ?
      h("div", null, "Click on a card to learn more about it!") :
      h("div", null, h("div", { class: 'name' }, state.selected), h("div", null, h("button", { disabled: this.addDisabled, onClick: this.addToDeck }, "Add to Deck"), h("button", { disabled: this.removeDisabled, onClick: this.removeFromDeck }, "Remove from Deck")), h("div", { class: 'info' }, h("div", null, "Actual info coming soon, I'll fill this out once I can query an API for info...")))));
  }
};
JournalPage.style = journalPageCss;

export { JournalPage as journal_page };
