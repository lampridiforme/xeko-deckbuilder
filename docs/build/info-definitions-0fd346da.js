var CardType;
(function (CardType) {
  CardType[CardType["species"] = 0] = "species";
  CardType[CardType["xeko"] = 1] = "xeko";
  CardType[CardType["boost"] = 2] = "boost";
  CardType[CardType["hotspot"] = 3] = "hotspot";
})(CardType || (CardType = {}));
var Rarity;
(function (Rarity) {
  Rarity[Rarity["common"] = 0] = "common";
  Rarity[Rarity["rare"] = 1] = "rare";
  Rarity[Rarity["vanishing"] = 2] = "vanishing";
  Rarity[Rarity["endangered"] = 3] = "endangered";
})(Rarity || (Rarity = {}));
var SpeciesType;
(function (SpeciesType) {
  SpeciesType[SpeciesType["reptile"] = 0] = "reptile";
  SpeciesType[SpeciesType["insect"] = 1] = "insect";
  SpeciesType[SpeciesType["mammal"] = 2] = "mammal";
  SpeciesType[SpeciesType["bird"] = 3] = "bird";
  SpeciesType[SpeciesType["amphibian"] = 4] = "amphibian";
  SpeciesType[SpeciesType["plant"] = 5] = "plant";
})(SpeciesType || (SpeciesType = {}));
var Pack;
(function (Pack) {
  Pack[Pack["madagascar"] = 0] = "madagascar";
  Pack[Pack["costarica"] = 1] = "costarica";
  Pack[Pack["indonesia"] = 2] = "indonesia";
  Pack[Pack["china"] = 3] = "china";
})(Pack || (Pack = {}));
var CardBorderColors;
(function (CardBorderColors) {
  CardBorderColors[CardBorderColors["purple"] = 0] = "purple";
  CardBorderColors[CardBorderColors["red"] = 1] = "red";
  CardBorderColors[CardBorderColors["orange"] = 2] = "orange";
  CardBorderColors[CardBorderColors["yellow"] = 3] = "yellow";
  CardBorderColors[CardBorderColors["blue"] = 4] = "blue";
})(CardBorderColors || (CardBorderColors = {}));
// export interface SpeciesCardData extends CardData {
//     speciesType: SpeciesType;
//     scientificName: string;
//     borders: CardBorders;
//     energy: number;
//     points: number;
//     level: number;
//     rulesText: string;
//     flavorText: string;
// }
// export interface BoostCardData extends CardData {
//     borders: CardBorders;
//     rulesText: string;
//     flavorText: string;
// }
// export interface XekoCardData extends CardData {
//     requiredLevels: Set<number>;
//     rulesText: string;
//     flavorText: string;
// }

export { CardType as C, Pack as P, Rarity as R, SpeciesType as S, CardBorderColors as a };
