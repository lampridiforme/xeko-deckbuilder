import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { m as madagascarNavData } from './apimock-4da75532.js';

const journalMainCss = ":host{display:grid;grid-template-columns:15em calc(100vw - 15em)}journal-navigator,journal-page{height:100vh}journal-navigator{width:100%;}journal-navigator:hover{}";

const JournalMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // @Prop() match: MatchResults;
    // componentDidLoad() {
    //   console.log(this.match?.params?.entry);
    //   state.selected = this.match?.params?.entry || '';
    // }
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
  render() {
    return (h(Host, null, h("journal-navigator", { navInfo: this.navInfo }), h("journal-page", null)));
  }
};
JournalMain.style = journalMainCss;

export { JournalMain as journal_main };
