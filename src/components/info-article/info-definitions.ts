export enum CardType {
    species,
    xeko,
    boost,
    hotspot
}

export enum Rarity {
    common,
    rare,
    vanishing,
    endangered
}

export enum SpeciesType {
    reptile,
    insect,
    mammal,
    bird,
    amphibian,
    plant
}

export enum Pack {
    madagascar,
    costarica,
    indonesia,
    china
}

export enum CardBorderColors {
    purple,
    red,
    orange,
    yellow,
    blue
}

export interface CardBorders {
    left: Set<CardBorderColors>;
    right: Set<CardBorderColors>;
    top: Set<CardBorderColors>;
    bottom: Set<CardBorderColors>;
}

export interface CardData {
    id: string;
    name: string;
    pack: Pack;
    number: number;
    rarity: Rarity;
    cardType: CardType;

    speciesType: SpeciesType;
    scientificName: string;
    borders: CardBorders;
    energy: number;
    points: number;
    level: Array<number>;
    rulesText: string;
    flavorText: string;

    requiredLevels: Set<number>;
}

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