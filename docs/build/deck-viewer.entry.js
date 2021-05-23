import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { o as onChange, s as state } from './store-12fabadf.js';
import { d as dataMap } from './apimock-9f8339ff.js';
import './info-definitions-0fd346da.js';

const deckViewerCss = ":host{display:block}";

const DeckViewer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.userDeck = [];
  }
  componentWillLoad() {
    onChange('userDeck', (val) => {
      console.log('deckchanged');
      this.userDeck = Object.entries(val);
    });
  }
  componentDidLoad() {
    // console.log(state.userDeck);
    // this.userDeck = Object.entries(state.userDeck);
  }
  render() {
    return (h(Host, null, this.userDeck.filter(([id, count]) => count > 0).length > 0 ?
      this.userDeck.map(([id, count]) => {
        var _a;
        return (count > 0) ?
          h("div", null, h("span", null, (_a = dataMap.get(id)) === null || _a === void 0 ? void 0 :
            _a.name, ": ", count), h("button", { onClick: () => state.userDeck = Object.assign(Object.assign({}, state.userDeck), { [id]: count - 1 }) }, "Remove 1"), h("button", { disabled: count > 2, onClick: () => state.userDeck = Object.assign(Object.assign({}, state.userDeck), { [id]: count + 1 }) }, "Add 1"), h("stencil-route-link", { url: '/encyclopedia/' + id }, h("button", null, "Go to Entry"))) : null;
      }) :
      h("div", null, "Start building your deck by adding a card from the encyclopedia page")));
  }
};
DeckViewer.style = deckViewerCss;

export { DeckViewer as deck_viewer };
