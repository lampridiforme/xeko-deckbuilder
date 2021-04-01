import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { S as SpeciesType, R as Rarity, P as Pack, a as madagascarCardData, C as CardType } from './apimock-4da75532.js';

const infoArticleCss = ":host{display:block}.img-wrapper{width:100%;height:20em;display:inline-block;text-align:center;background-color:goldenrod}img{display:inline-block;height:100%;box-sizing:border-box;padding:2em}.text-wrapper{width:50%;background-color:blue;text-align:justify;padding:0 5em;box-sizing:border-box;display:inline-block}.token{width:5em;height:5em;background-color:red;position:relative;top:0;left:0;border-radius:100em;margin:0 .5em}.token:not(:nth-child(1)){margin:.5em}.token-wrapper,.pack-wrapper{background:blue;display:inline-block;height:100%;padding-top:2em;box-sizing:border-box}#top-border{display:inline-block;background-color:orange;height:2em;width:calc(100% - 2 * 2em);position:absolute;top:0;left:2em}#bottom-border{display:inline-block;height:2em;width:calc(100% - 2 * 2em);background-color:purple;position:absolute;bottom:0;left:2em}#right-border{display:inline-block;height:calc(100% - 2 * 2em);width:2em;background-color:green;position:absolute;right:0;top:2em}#left-border{display:inline-block;height:calc(100% - 2 * 2em);width:2em;background-color:red;position:absolute;left:0;top:2em}.border-wrapper{display:inline-block;height:100%;position:relative}.border>.left,.border>.right{display:inline-block;width:50%;height:100%;outline:2px dashed white}.border>.top,.border>.bottom{width:100%;height:50%;outline:2px dashed white}";

const assetPrefix = '/assets/';
const speciesTypeToString = new Map([
  [SpeciesType.amphibian, 'Amphibian'],
  [SpeciesType.bird, 'Bird'],
  [SpeciesType.insect, 'Insect'],
  [SpeciesType.mammal, 'Mammal'],
  [SpeciesType.plant, 'Plant'],
  [SpeciesType.reptile, 'Reptile']
]);
const rarityToString = new Map([
  [Rarity.common, 'Common'],
  [Rarity.vanishing, 'Vanishing'],
  [Rarity.rare, 'Rare'],
  [Rarity.endangered, 'Endangered']
]);
const packToString = new Map([
  [Pack.madagascar, 'Madagascar'],
  [Pack.costarica, 'Costa Rica'],
  [Pack.indonesia, 'Indonesia'],
  [Pack.china, 'China']
]);
const InfoArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imgSrc = 'test.png';
  }
  componentDidLoad() {
    console.log(madagascarCardData);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (h(Host, null, h("div", { class: 'img-wrapper' }, h("div", { class: 'token-wrapper' }, h("div", { class: "token" }), h("div", { class: "token" }), h("div", { class: "token" })), h("div", { class: 'border-wrapper' }, h("div", { id: 'top-border', class: 'border' }, h("div", { class: 'left' }), h("div", { class: 'right' })), h("div", { id: 'bottom-border', class: 'border' }, h("div", { class: 'left' }), h("div", { class: 'right' })), h("div", { id: 'left-border', class: 'border' }, h("div", { class: 'top' }), h("div", { class: 'bottom' })), h("div", { id: 'right-border', class: 'border' }, h("div", { class: 'top' }), h("div", { class: 'bottom' })), h("img", { src: `${assetPrefix}${this.imgSrc}` })), h("div", { class: 'pack-wrapper' }, h("div", { class: "token" }))), h("div", { class: 'text-wrapper' }, h("div", null, h("span", null, "Pack: "), packToString.get((_a = this.cardData) === null || _a === void 0 ? void 0 : _a.pack)), h("div", null, h("span", null, "Number: "), (_b = this.cardData) === null || _b === void 0 ? void 0 :
      _b.number), h("div", null, h("span", null, "Rarity: "), rarityToString.get((_c = this.cardData) === null || _c === void 0 ? void 0 : _c.rarity)), 
    // species card case
    (this.cardData.cardType === CardType.species) ?
      [
        h("div", null, h("span", null, "Level: "), this.cardData.level),
        h("div", null, h("span", null, "Species Type: "), ((_d = this.cardData) === null || _d === void 0 ? void 0 : _d.speciesType) ? speciesTypeToString.get(this.cardData.speciesType) : ''),
        h("div", null, h("span", null, "Scientific Name: "), (_e = this.cardData) === null || _e === void 0 ? void 0 :
          _e.scientificName)
      ] : (this.cardData.cardType === CardType.boost) ?
      // boost card case
      [] :
      // xeko card case
      [
        h("div", null, h("span", null, "Required Levels: "), Array.from((_f = this.cardData) === null || _f === void 0 ? void 0 : _f.requiredLevels.values()).reduce((accu, level) => `${accu}${level}, `, ''))
      ], h("div", null, h("span", null, "Rules Text: "), (_g = this.cardData) === null || _g === void 0 ? void 0 :
      _g.rulesText), h("div", null, h("span", null, "Flavor Text: "), (_h = this.cardData) === null || _h === void 0 ? void 0 :
      _h.flavorText))));
  }
};
InfoArticle.style = infoArticleCss;

export { InfoArticle as info_article };
