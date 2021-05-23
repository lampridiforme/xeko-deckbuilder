import { r as registerInstance, h } from './index-37ada624.js';

const journalNavigatorCss = ":host{display:inline-block;transition:color 1s 0}nav{height:100%;overflow-y:auto}.deck{font-size:2em;padding-left:.5em}.card{font-size:1em;padding-left:1em;background-color:transparent;padding-top:.25em;padding-bottom:.25em}.card:hover,.card:focus{background-color:gold;}a{text-decoration:none;color:black}a:visited{color:black}";

const JournalNavigator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("nav", null, this.navInfo.map(({ deck, cards }) => {
      return [
        h("div", { class: 'deck' }, deck),
        h("div", null, cards.map(({ name, id }) => {
          // return <div class='card' onClick={() => state.selected = id}>{name}</div>
          return (h("stencil-route-link", { url: `/encyclopedia/${id}` }, h("div", { class: 'card' }, name)));
        }))
      ];
    })));
  }
};
JournalNavigator.style = journalNavigatorCss;

export { JournalNavigator as journal_navigator };
