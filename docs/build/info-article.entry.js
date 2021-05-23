import { r as registerInstance, h, e as Host } from './index-37ada624.js';
import { S as SpeciesType, R as Rarity, P as Pack, a as CardBorderColors, C as CardType } from './info-definitions-0fd346da.js';

const infoArticleCss = ":host{display:block}.img-wrapper{width:100%;height:20em;display:flex;justify-content:center;text-align:center;margin:1em 0;}img{display:inline-block;box-sizing:border-box;margin:2em;width:calc(100% - 4em);height:calc(100% - 4em);border:2px solid black}.text-wrapper{width:100%;text-align:justify;padding:0 5em;box-sizing:border-box;display:inline-block}.token{width:2.5em;height:2.5em;position:relative;top:0;left:0;line-height:2.5em;border-radius:100em;margin:0 .5em;font-weight:600;border:2px solid black}#points{background:linear-gradient( to left top, rgb(255, 79, 79), rgb(240, 166, 69))}#energy{background:linear-gradient( to left top, rgb(83, 107, 214), rgb(116, 215, 240))}#pack{background:rgb(86, 180, 86)}.token:not(:nth-child(1)){margin:.5em}.token-wrapper,.pack-wrapper{display:inline-block;height:100%;padding-top:2em;box-sizing:border-box}#top-border{display:inline-block;height:2em;width:calc(100% - 2 * 2em);position:absolute;top:0;left:2em}#top-border>.left{border-top-left-radius:5px;border-right:2px solid black;border:2px solid black}#top-border>.right{border-top-right-radius:5px;border-left:2px solid black;border:2px solid black}#bottom-border{display:inline-block;height:2em;width:calc(100% - 2 * 2em);position:absolute;bottom:0;left:2em}#bottom-border>.left{border-bottom-left-radius:5px;border-right:2px solid black;border:2px solid black}#bottom-border>.right{border-bottom-right-radius:5px;border-left:2px solid black;border:2px solid black}#right-border{display:inline-block;height:calc(100% - 2 * 2em);width:2em;position:absolute;right:0;top:2em}#right-border>.top{border-top-right-radius:5px;border-bottom:2px solid black;border:2px solid black}#right-border>.bottom{border-bottom-right-radius:5px;border-top:2px solid black;border:2px solid black}#left-border{display:inline-block;height:calc(100% - 2 * 2em);width:2em;position:absolute;left:0;top:2em}#left-border>.top{border-top-left-radius:5px;border-bottom:2px solid black;border:2px solid black}#left-border>.bottom{border-bottom-left-radius:5px;border-top:2px solid black;border:2px solid black}.border-wrapper{display:inline-block;height:100%;position:relative}.border{}.border>.left,.border>.right{box-sizing:border-box;display:inline-block;width:50%;height:100%}.border>.top,.border>.bottom{box-sizing:border-box;width:100%;height:50%}.label{font-weight:800}.text-wrapper>div{margin-bottom:1em}";

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
const cardBorderColorToString = new Map([
  [CardBorderColors.blue, 'blue'],
  [CardBorderColors.orange, 'orange'],
  [CardBorderColors.purple, 'purple'],
  [CardBorderColors.red, 'red'],
  [CardBorderColors.yellow, 'yellow'],
  [null, 'transparent']
]);
const packToAbbreviatedString = new Map([
  [Pack.madagascar, 'MM'],
  [Pack.costarica, 'CR'],
  [Pack.indonesia, 'IN'],
  [Pack.china, 'CH']
]);
const InfoArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imgSrc = 'test.png';
    this.topBorderColors = [];
    this.leftBorderColors = [];
    this.rightBorderColors = [];
    this.bottomBorderColors = [];
  }
  onCardDataChange() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log('infopanel carddata', this.cardData);
    this.topBorderColors = this.generateBorders((_b = (_a = this.cardData) === null || _a === void 0 ? void 0 : _a.borders) === null || _b === void 0 ? void 0 : _b.top);
    this.bottomBorderColors = this.generateBorders((_d = (_c = this.cardData) === null || _c === void 0 ? void 0 : _c.borders) === null || _d === void 0 ? void 0 : _d.bottom);
    this.leftBorderColors = this.generateBorders((_f = (_e = this.cardData) === null || _e === void 0 ? void 0 : _e.borders) === null || _f === void 0 ? void 0 : _f.left);
    this.rightBorderColors = this.generateBorders((_h = (_g = this.cardData) === null || _g === void 0 ? void 0 : _g.borders) === null || _h === void 0 ? void 0 : _h.right);
  }
  generateBorders(borderSet) {
    if (!borderSet || borderSet.size === 0) {
      return [cardBorderColorToString.get(null), cardBorderColorToString.get(null)];
    }
    else if (borderSet.size === 1) {
      const entries = Array.from(borderSet.values());
      console.log('single', entries);
      return [cardBorderColorToString.get(entries[0]), cardBorderColorToString.get(entries[0])];
    }
    else {
      const entries = Array.from(borderSet.values());
      console.log('double', entries);
      return [cardBorderColorToString.get(entries[0]), cardBorderColorToString.get(entries[1])];
    }
  }
  componentDidLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log(this.cardData);
    this.topBorderColors = this.generateBorders((_b = (_a = this.cardData) === null || _a === void 0 ? void 0 : _a.borders) === null || _b === void 0 ? void 0 : _b.top);
    this.bottomBorderColors = this.generateBorders((_d = (_c = this.cardData) === null || _c === void 0 ? void 0 : _c.borders) === null || _d === void 0 ? void 0 : _d.bottom);
    this.leftBorderColors = this.generateBorders((_f = (_e = this.cardData) === null || _e === void 0 ? void 0 : _e.borders) === null || _f === void 0 ? void 0 : _f.left);
    this.rightBorderColors = this.generateBorders((_h = (_g = this.cardData) === null || _g === void 0 ? void 0 : _g.borders) === null || _h === void 0 ? void 0 : _h.right);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
    return (h(Host, null, h("div", { class: 'img-wrapper' }, h("div", { class: 'token-wrapper' }, h("div", { class: "token", id: 'points' }, (_a = this.cardData) === null || _a === void 0 ? void 0 : _a.points), h("div", { class: "token", id: 'energy' }, (_b = this.cardData) === null || _b === void 0 ? void 0 : _b.energy)), h("div", { class: 'border-wrapper' }, h("div", { id: 'top-border', class: 'border' }, h("div", { class: 'left', style: { 'background-color': this.topBorderColors[0], 'border-color': (((_e = (_d = (_c = this.cardData) === null || _c === void 0 ? void 0 : _c.borders) === null || _d === void 0 ? void 0 : _d.top) === null || _e === void 0 ? void 0 : _e.size) > 0) ? 'black' : 'transparent' } }), h("div", { class: 'right', style: { 'background-color': this.topBorderColors[1], 'border-color': (((_h = (_g = (_f = this.cardData) === null || _f === void 0 ? void 0 : _f.borders) === null || _g === void 0 ? void 0 : _g.top) === null || _h === void 0 ? void 0 : _h.size) > 0) ? 'black' : 'transparent' } })), h("div", { id: 'bottom-border', class: 'border' }, h("div", { class: 'left', style: { 'background-color': this.bottomBorderColors[0], 'border-color': (((_l = (_k = (_j = this.cardData) === null || _j === void 0 ? void 0 : _j.borders) === null || _k === void 0 ? void 0 : _k.bottom) === null || _l === void 0 ? void 0 : _l.size) > 0) ? 'black' : 'transparent' } }), h("div", { class: 'right', style: { 'background-color': this.bottomBorderColors[1], 'border-color': (((_p = (_o = (_m = this.cardData) === null || _m === void 0 ? void 0 : _m.borders) === null || _o === void 0 ? void 0 : _o.bottom) === null || _p === void 0 ? void 0 : _p.size) > 0) ? 'black' : 'transparent' } })), h("div", { id: 'left-border', class: 'border' }, h("div", { class: 'top', style: { 'background-color': this.leftBorderColors[0], 'border-color': (((_s = (_r = (_q = this.cardData) === null || _q === void 0 ? void 0 : _q.borders) === null || _r === void 0 ? void 0 : _r.left) === null || _s === void 0 ? void 0 : _s.size) > 0) ? 'black' : 'transparent' } }), h("div", { class: 'bottom', style: { 'background-color': this.leftBorderColors[1], 'border-color': (((_v = (_u = (_t = this.cardData) === null || _t === void 0 ? void 0 : _t.borders) === null || _u === void 0 ? void 0 : _u.left) === null || _v === void 0 ? void 0 : _v.size) > 0) ? 'black' : 'transparent' } })), h("div", { id: 'right-border', class: 'border' }, h("div", { class: 'top', style: { 'background-color': this.rightBorderColors[0], 'border-color': (((_y = (_x = (_w = this.cardData) === null || _w === void 0 ? void 0 : _w.borders) === null || _x === void 0 ? void 0 : _x.right) === null || _y === void 0 ? void 0 : _y.size) > 0) ? 'black' : 'transparent' } }), h("div", { class: 'bottom', style: { 'background-color': this.rightBorderColors[1], 'border-color': (((_1 = (_0 = (_z = this.cardData) === null || _z === void 0 ? void 0 : _z.borders) === null || _0 === void 0 ? void 0 : _0.right) === null || _1 === void 0 ? void 0 : _1.size) > 0) ? 'black' : 'transparent' } })), h("img", { src: `${assetPrefix}${this.imgSrc}` })), h("div", { class: 'pack-wrapper' }, h("div", { class: "token", id: 'pack' }, packToAbbreviatedString.get((_2 = this.cardData) === null || _2 === void 0 ? void 0 : _2.pack)))), h("div", { class: 'text-wrapper' }, h("div", null, h("span", { class: 'label' }, "Pack: "), packToString.get((_3 = this.cardData) === null || _3 === void 0 ? void 0 : _3.pack)), h("div", null, h("span", { class: 'label' }, "Number: "), (_4 = this.cardData) === null || _4 === void 0 ? void 0 :
      _4.number), h("div", null, h("span", { class: 'label' }, "Rarity: "), rarityToString.get((_5 = this.cardData) === null || _5 === void 0 ? void 0 : _5.rarity)), 
    // species card case
    (((_6 = this.cardData) === null || _6 === void 0 ? void 0 : _6.cardType) === CardType.species) ?
      [
        h("div", null, h("span", { class: 'label' }, "Level: "), this.cardData.level.reduce((accu, level, idx) => idx === this.cardData.level.length - 1 ? `${accu}${level}` : `${accu}${level}, `, '')),
        h("div", null, h("span", { class: 'label' }, "Species Type: "), speciesTypeToString.get((_7 = this.cardData) === null || _7 === void 0 ? void 0 : _7.speciesType)),
        h("div", null, h("span", { class: 'label' }, "Scientific Name: "), (_8 = this.cardData) === null || _8 === void 0 ? void 0 :
          _8.scientificName)
      ] : (((_9 = this.cardData) === null || _9 === void 0 ? void 0 : _9.cardType) === CardType.boost) ?
      // boost card case
      [] :
      // xeko card case
      [
        h("div", null, h("span", { class: 'label' }, "Required Levels: "), (this.cardData) ? Array.from((_10 = this.cardData) === null || _10 === void 0 ? void 0 : _10.requiredLevels.values()).reduce((accu, level) => `${accu}${level}, `, '') : '')
      ], ((_11 = this.cardData) === null || _11 === void 0 ? void 0 : _11.rulesText) ?
      h("div", null, h("span", { class: 'label' }, "Rules Text: "), (_12 = this.cardData) === null || _12 === void 0 ? void 0 :
        _12.rulesText) : null, ((_13 = this.cardData) === null || _13 === void 0 ? void 0 : _13.flavorText) ?
      h("div", null, h("span", { class: 'label' }, "Flavor Text: "), (_14 = this.cardData) === null || _14 === void 0 ? void 0 :
        _14.flavorText) : null)));
  }
  static get watchers() { return {
    "cardData": ["onCardDataChange"]
  }; }
};
InfoArticle.style = infoArticleCss;

export { InfoArticle as info_article };
