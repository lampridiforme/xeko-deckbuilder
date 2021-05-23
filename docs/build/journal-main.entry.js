import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { m as madagascarNavData } from './apimock-21630b6a.js';
import './info-definitions-0fd346da.js';

const journalMainCss = ":host{display:grid;grid-template-columns:15em calc(100vw - 15em)}journal-navigator,journal-page{height:calc(100vh - 50px);box-sizing:border-box}journal-navigator{width:100%;}journal-navigator:hover{}";

const JournalMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // private navInfo = [
    //   {
    //     deck: 'Madagascar',
    //     cards: [
    //       {name: 'Ring Tailed Lemur', id: 'mm0'},
    //       // {name: 'Fire Elemental', id: 'mm1'}
    //     ]
    //   },
    //   {
    //     deck: 'Costa Rica',
    //     cards: [
    //       // {name: 'Blue Morpho Butterfly', id: 'cr0'}
    //     ]
    //   }
    // ];
    this.navInfo = [madagascarNavData];
  }
  componentDidLoad() {
    var _a, _b;
    console.log('matched: ', (_b = (_a = this.match) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.entry);
  }
  render() {
    var _a, _b, _c;
    return (h(Host, null, h("journal-navigator", { navInfo: this.navInfo }), h("journal-page", { selected: ((_c = (_b = (_a = this.match) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.entry) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || '' })));
  }
};
JournalMain.style = journalMainCss;

export { JournalMain as journal_main };
