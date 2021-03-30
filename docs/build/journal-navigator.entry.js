import { r as registerInstance, h } from './index-37ada624.js';
import { s as state } from './store-12fabadf.js';

const journalNavigatorCss = ":host{display:block;border:5px dotted red}.deck{font-size:2em}.card{font-size:1em}";

const JournalNavigator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("nav", null, this.navInfo.map(({ deck, cards }) => {
      return h("div", null, h("div", { class: 'deck' }, deck), h("div", null, cards.map((card) => {
        return h("div", { class: 'card', onClick: () => state.selected = card }, card);
      })));
    })));
  }
};
JournalNavigator.style = journalNavigatorCss;

export { JournalNavigator as journal_navigator };
