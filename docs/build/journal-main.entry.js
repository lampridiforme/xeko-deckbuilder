import { r as registerInstance, h, e as Host } from './index-37ada624.js';

const journalMainCss = ":host{display:block}";

const JournalMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navInfo = [
      {
        deck: 'Madagascar',
        cards: [
          'Ring Tailed Lemur',
          'Fire Elemental',
          'Fossa'
        ]
      },
      {
        deck: 'Costa Rica',
        cards: [
          'Blue Morpho Butterfly'
        ]
      }
    ];
  }
  render() {
    return (h(Host, null, h("journal-navigator", { navInfo: this.navInfo }), h("journal-page", null)));
  }
};
JournalMain.style = journalMainCss;

export { JournalMain as journal_main };
