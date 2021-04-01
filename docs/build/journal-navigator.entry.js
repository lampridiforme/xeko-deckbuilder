import { r as registerInstance, h } from './index-37ada624.js';

const journalNavigatorCss = ":host{display:inline-block;background-color:skyblue;transition:color 1s 0}nav{height:100%;overflow-y:auto}.deck{font-size:2em;padding-left:.5em}.card{font-size:1em;padding-left:1em;background-color:transparent;transition-property:background-color, padding-top, padding-bottom;transition-duration:.3s;transition-delay:0}.card:hover,.card:focus{background-color:white;padding-top:.5em;padding-bottom:.5em}a{text-decoration:none;color:black}a:visited{color:black}";

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
