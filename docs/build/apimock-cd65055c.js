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

const data = {
  "MM1": {
    "name": "Camouflage",
    "pack": "Madagascar",
    "number": 1,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["blue"],
      "top": ["orange", "yellow"],
      "bottom": []
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5",
    "rulesText": "+5 Energy",
    "flavorText": "Great defense - animals blend in to hide.",
    "image": ""
  },
  "MM2": {
    "name": "Fresh Spring",
    "pack": "Madagascar",
    "number": 2,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "left": ["blue"],
      "right": ["orange", "red", "blue"],
      "top": [],
      "bottom": ["blue", "red", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-4",
    "rulesText": "+4 Energy",
    "flavorText": "A quick drink refreshes.",
    "image": ""
  },
  "MM3": {
    "name": "Warning Sign",
    "pack": "Madagascar",
    "number": 3,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "left": ["orange"],
      "right": ["orange", "yellow"],
      "top": ["orange", "yellow"],
      "bottom": ["yellow"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-ENEMYHAND",
    "rulesText": "Add energy equal to the number of cards in opponent's hand.",
    "flavorText": "Birds take flight giving warning that something big is on its way.",
    "image": ""
  },
  "MM4": {
    "name": "Vacant Cave",
    "pack": "Madagascar",
    "number": 4,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "left": ["red"],
      "right": [],
      "top": ["red"],
      "bottom": []
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-10",
    "rulesText": "+10 Energy",
    "flavorText": "Great place to hide ... hope it's empty!",
    "image": ""
  },
  "MM5": {
    "name": "Lightning Strike",
    "pack": "Madagascar",
    "number": 5,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-7",
    "rulesText": "+7 Energy",
    "flavorText": "Lightning hits the opponent's species. Ouch!",
    "image": ""
  },
  "MM6": {
    "name": "Swarm",
    "pack": "Madagascar",
    "number": 6,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "left": [],
      "right": ["yellow", "blue"],
      "top": ["yellow", "blue"],
      "bottom": ["yellow", "blue"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-TROPHIC1MULT2",
    "rulesText": "Add Energy equal to the number of level 1 species in play times 2.",
    "flavorText": "There's strength in numbers.",
    "image": ""
  },
  "MM7": {
    "name": "Disguise",
    "pack": "Madagascar",
    "number": 7,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["orange"],
      "top": ["orange", "yellow"],
      "bottom": []
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-ADDTROPHIC-2-5",
    "rulesText": "+3 Energy. Add an additional +5 Energy if played on a level 2 species.",
    "flavorText": "To be invisible, blend in.",
    "image": ""
  },
  "MM8": {
    "name": "Armour",
    "pack": "Madagascar",
    "number": 8,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["orange", "red"],
      "right": [],
      "top": ["orange"],
      "bottom": ["red"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-ADDTROPHIC-3-5",
    "rulesText": "+3 Energy. Add an additional +5 Energy if played on a level 3 species.",
    "flavorText": "Crusty shell protects so well!",
    "image": ""
  },
  "MM9": {
    "name": "Heavy Storm",
    "pack": "Madagascar",
    "number": 9,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": [],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "TURFTIE",
    "rulesText": "This Turf War end in a tie.",
    "flavorText": "All creatures, big and small, take cover in heavy weather.",
    "image": ""
  },
  "MM10": {
    "name": "Stridulation",
    "pack": "Madagascar",
    "number": 10,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "left": ["blue", "red"],
      "right": ["red", "orange"],
      "top": ["yellow", "blue"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-3-REUSECARD",
    "rulesText": "+3 Energy. Shuffle the card back into your Draw Pile when played.",
    "flavorText": "The vibrating of spines to make a resping sound scares some predators away.",
    "image": ""
  },
  "MM11": {
    "name": "Food Stash",
    "pack": "Madagascar",
    "number": 11,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["orange", "red"],
      "right": ["red", "orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-7-REUSECARD",
    "rulesText": "+7 Energy. Shuffle this card back into your Draw Pile when played.",
    "flavorText": "Quick snack gives extra energy.",
    "image": ""
  },
  "MM12": {
    "name": "Toxic",
    "pack": "Madagascar",
    "number": 12,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "left": ["yellow"],
      "right": [],
      "top": ["red", "yellow"],
      "bottom": ["yellow", "red", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-BASEENERGY",
    "rulesText": "Add Energy equal to the base Energy of the Species card.",
    "flavorText": "Some species acquire toxins through their diet, making them poisonous and yucky-tasting. The Mantella baroni snacks on ants.",
    "image": ""
  },
  "MM13": {
    "name": "Rain",
    "pack": "Madagascar",
    "number": 13,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["orange", "red"],
      "right": [],
      "top": ["yellow", "blue"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-REUSECARD",
    "rulesText": "+5 Energy. Shuffle this card back into your Draw Pile when played.",
    "flavorText": "Tsy misy ala, tsy misy rano, tsy misy vary!",
    "image": ""
  },
  "MM14": {
    "name": "Hiding Spot",
    "pack": "Madagascar",
    "number": 14,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "left": ["blue", "orange"],
      "right": ["orange", "blue"],
      "top": ["orange", "yellow"],
      "bottom": ["blue", "yellow"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-3-DRAWCARD-1",
    "rulesText": "+3 Energy. Draw a card.",
    "flavorText": "Lie low and keep quiet until trouble passes by...",
    "image": ""
  },
  "MM15": {
    "name": "Sticky Web Trap",
    "pack": "Madagascar",
    "number": 15,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "left": ["blue", "yellow"],
      "right": ["orange", "blue"],
      "top": ["yellow", "orange", "blue"],
      "bottom": []
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "TURFENEMYUSELESSBOOSTS",
    "rulesText": "During this Turf War, all Boost cards played by opponent increase Energy by 0.",
    "flavorText": "Gumbed up in a spider's sticky web.",
    "image": ""
  },
  "MM16": {
    "name": "Up a Tree",
    "pack": "Madagascar",
    "number": 16,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["red", "yellow"],
      "top": ["orange", "red", "yellow"],
      "bottom": ["yellow", "red", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-NOTFIRSTBOOST-5",
    "rulesText": "+5 Energy. If this is not your first Boost card in this Turf War, add an additional +5 Energy.",
    "flavorText": "Out of harm's reach?",
    "image": ""
  },
  "MM17": {
    "name": "Full Moon",
    "pack": "Madagascar",
    "number": 17,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["yellow", "orange"],
      "top": ["yellow", "orange"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-6",
    "rulesText": "+6 Energy",
    "flavorText": "Moon light, shine bright. Light the earth for the hunt tonight.",
    "image": ""
  },
  "MM18": {
    "name": "Fangs!",
    "pack": "Madagascar",
    "number": 18,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["yellow"],
      "bottom": ["yellow"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-ADDTROPHIC-2-3",
    "rulesText": "+5 Energy. Add an additional +3 Energy if played on a level 2 species.",
    "flavorText": "Sharp teeth --- big bite! Fangs give Turf War advantage.",
    "image": ""
  },
  "MM19": {
    "name": "Brute Force",
    "pack": "Madagascar",
    "number": 19,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-ADDTROPHIC-3-3",
    "rulesText": "+5 Energy. Add an additional +3 Energy if played on a level 3 species.",
    "flavorText": "It helps to be big and strong.",
    "image": ""
  },
  "MM20": {
    "name": "Ruckuss!",
    "pack": "Madagascar",
    "number": 20,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "left": ["blue", "red"],
      "right": ["orange", "yellow"],
      "top": ["orange", "blue"],
      "bottom": ["yellow", "red"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-4",
    "rulesText": "+4 Energy",
    "flavorText": "Make crazy noise to win the day.",
    "image": ""
  },
  "MM21": {
    "name": "Symbiosis",
    "pack": "Madagascar",
    "number": 21,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "left": ["blue"],
      "right": ["orange", "yellow"],
      "top": ["blue"],
      "bottom": ["orange", "yellow"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "TURFADDENEMYECO",
    "rulesText": "Add Energy equal to the Eco-points of the other species in the Turf War.",
    "flavorText": "Wild collaboration. These clever frogs have a wet home and ready bug supply thanks to the pitcher plant.",
    "image": ""
  },
  "MM22": {
    "name": "Healing Plant",
    "pack": "Madagascar",
    "number": 22,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "left": ["blue"],
      "right": ["blue"],
      "top": ["blue"],
      "bottom": ["blue"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-5-ADDTROPHIC-1-3",
    "rulesText": "+5 Energy. Add an additional +3 Energy if played on a level 1 species.",
    "flavorText": "Rosy periwinkle, found only in Madagascar, is considered a miracle plant.",
    "image": ""
  },
  "MM23": {
    "name": "Nocturnal Instinct",
    "pack": "Madagascar",
    "number": 23,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "left": ["red"],
      "right": ["red"],
      "top": ["red"],
      "bottom": ["red"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-7-ADDTROPHIC-4-5",
    "rulesText": "+7 Energy. Add an additional +5 Energy if played on a level 4 species",
    "flavorText": "Looking for a midnight snack!",
    "image": ""
  },
  "MM24": {
    "name": "Super Smell",
    "pack": "Madagascar",
    "number": 24,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "left": [],
      "right": ["red"],
      "top": [],
      "bottom": ["red"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-10",
    "rulesText": "+10 Energy",
    "flavorText": "Sniff. Sniff! What smells? Oh, it's my tail!",
    "image": ""
  },
  "MM25": {
    "name": "Super Speed",
    "pack": "Madagascar",
    "number": 25,
    "cardType": "Boost",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "left": ["purple"],
      "right": ["purple"],
      "top": ["purple"],
      "bottom": ["purple"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "ADDENERGY-15",
    "rulesText": "+15 Energy",
    "flavorText": "Go fast to catch your prey or get away!",
    "image": ""
  },
  "MM26": {
    "name": "Golden Bamboo Lemur",
    "pack": "Madagascar",
    "number": 26,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Hapalemur aureus",
    "rarity": "Vanishing",
    "borders": {
      "left": ["red"],
      "right": ["red"],
      "top": ["red"],
      "bottom": ["red"]
    },
    "energy": 12,
    "points": 10,
    "level": 4,
    "rulesType": "TURFNOBOOST",
    "rulesText": "Boost cards may not be played in Turf Wars involving this card.",
    "flavorText": "One of the world's most endangered. GBL eats daily - 500g of bamboo containing 12 times the amount of cyanide lethal to most animals.",
    "image": ""
  },
  "MM27": {
    "name": "Hawk Moth",
    "pack": "Madagascar",
    "number": 27,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Xanthopan morganii praedicta",
    "rarity": "Common",
    "borders": {
      "left": [],
      "right": ["red"],
      "top": [],
      "bottom": ["red"]
    },
    "energy": 13,
    "points": 13,
    "level": 4,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Super-fast flyers and symbiotic with comet orchid. Darwin predicted their existence before they were known.",
    "image": ""
  },
  "MM28": {
    "name": "Fossa",
    "pack": "Madagascar",
    "number": 28,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Cryptoprocta ferox",
    "rarity": "Endangered",
    "borders": {
      "left": ["purple"],
      "right": [],
      "top": ["purple"],
      "bottom": ["purple"]
    },
    "energy": 14,
    "points": 11,
    "level": 4,
    "rulesType": "FEROCITY-6",
    "rulesText": "Ferocity 6: This species gets +6 Energy when it is the invading species.",
    "flavorText": "One of the world's weirdest - and Madagascar's most ferocious - predators. Said to have a nose like a dog's, teeth like a leopard's and whiskers like an otter's.",
    "image": ""
  },
  "MM29": {
    "name": "Hawksbill Sea Turtle",
    "pack": "Madagascar",
    "number": 29,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Eretmochelys imbricata",
    "rarity": "Vanishing",
    "borders": {
      "left": [],
      "right": ["purple", "red"],
      "top": ["purple", "red"],
      "bottom": []
    },
    "energy": 13,
    "points": 9,
    "level": 4,
    "rulesType": "MORPH-4",
    "rulesText": "Morph 4: You may draw up to 4 cards at the beginning of any Turf War involving this species.",
    "flavorText": "This ocean swimmer loves the taste of sea sponges. Mind the beak!",
    "image": ""
  },
  "MM30": {
    "name": "Madagascar Fish Eagle",
    "pack": "Madagascar",
    "number": 30,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Haliaeetus vociferoides",
    "rarity": "Vanishing",
    "borders": {
      "left": ["red", "purple"],
      "right": ["purple", "red"],
      "top": [],
      "bottom": ["red", "purple"]
    },
    "energy": 14,
    "points": 12,
    "level": 4,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Close relative of the bald eagle - one of the most endangered raptors in the world. Loud, measured call: Wha ... wah ... wah ...",
    "image": ""
  },
  "MM31": {
    "name": "Golden Crowned Lemur",
    "pack": "Madagascar",
    "number": 31,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Propithecus tattersalli",
    "rarity": "Vanishing",
    "borders": {
      "left": ["red", "purple"],
      "right": [],
      "top": ["red", "purple"],
      "bottom": ["red", "purple"]
    },
    "energy": 9,
    "points": 15,
    "level": 4,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "One of the most endangered lemurs and fady to harm. Grooms its (and friends') fur with six lower teeth that stick out to form a funky comb.",
    "image": ""
  },
  "MM32": {
    "name": "Ploughshare Tortoise",
    "pack": "Madagascar",
    "number": 32,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Geochelone yniphora",
    "rarity": "Endangered",
    "borders": {
      "left": ["red", "purple"],
      "right": ["red", "purple"],
      "top": ["red", "purple"],
      "bottom": []
    },
    "energy": 10,
    "points": 10,
    "level": 4,
    "rulesType": "NEST-6",
    "rulesText": "Nest 6: This species gets +6 Energy when it is the defending species.",
    "flavorText": "In wrestling matches to win a mate, these turtles use their \"plow\" to flip over opponents.",
    "image": ""
  },
  "MM33": {
    "name": "Tomato Frog",
    "pack": "Madagascar",
    "number": 33,
    "cardType": "Species",
    "speciesType": "Amphibian",
    "speciesName": "Dyscophus antongili",
    "rarity": "",
    "borders": {
      "left": [],
      "right": ["red", "purple"],
      "top": ["red", "purple"],
      "bottom": ["red", "purple"]
    },
    "energy": 13,
    "points": 6,
    "level": 4,
    "rulesType": "DEFEND-3-4",
    "rulesText": "This species gets +4 Energy when invaded by a level 3 species.",
    "flavorText": " Red like a ripe tomato. As a defense, it secretes a toxic ooze.",
    "image": ""
  },
  "MM34": {
    "name": "Giant Leaf-tailed Gecko",
    "pack": "Madagascar",
    "number": 34,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Uroplatus fimbriatus",
    "rarity": "Common",
    "borders": {
      "left": ["red", "purple"],
      "right": [],
      "top": ["red", "purple"],
      "bottom": []
    },
    "energy": 11,
    "points": 14,
    "level": 4,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Gecko with perfect tree camouflage. Bark-like skin, large eyes, no eye lids, a flip-top head and leaf-like tail.",
    "image": ""
  },
  "MM35": {
    "name": "Nile Crocodile",
    "pack": "Madagascar",
    "number": 35,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Crocodylus niloticus",
    "rarity": "Common",
    "borders": {
      "left": [],
      "right": ["red", "purple"],
      "top": [],
      "bottom": ["red", "purple"]
    },
    "energy": 15,
    "points": 8,
    "level": 4,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "One tough and hungry crock - where did that bird go? (Burp!)",
    "image": ""
  },
  "MM36": {
    "name": "Giant-striped Mongoose",
    "pack": "Madagascar",
    "number": 36,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Galidictis grandidieri",
    "rarity": "Endangered",
    "borders": {
      "left": ["red", "purple"],
      "right": [],
      "top": ["red", "purple"],
      "bottom": ["red", "purple"]
    },
    "energy": 10,
    "points": 9,
    "level": 4,
    "rulesType": "TURFSPECIES-REPTILE-4",
    "rulesText": "This species gets +4 Energy when involved in a Turf War with a Reptile species.",
    "flavorText": "Nocturnal and crepuscular - active at night and at twilight.",
    "image": ""
  },
  "MM37": {
    "name": "Malagasy Ring-tailed Mongoose",
    "pack": "Madagascar",
    "number": 37,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Galidia elegans",
    "rarity": "Rare",
    "borders": {
      "left": [],
      "right": ["red", "purple"],
      "top": [],
      "bottom": ["red", "purple"]
    },
    "energy": 10,
    "points": 11,
    "level": 4,
    "rulesType": "TURFSPECIES-REPTILE-4",
    "rulesText": "This species gets +4 Energy when involved in a Turf War with a Reptile species.",
    "flavorText": "Diurnal and gregarious - active and playful during the day.",
    "image": ""
  },
  "MM38": {
    "name": "Golden Frog",
    "pack": "Madagascar",
    "number": 38,
    "cardType": "Species",
    "speciesType": "Amphibian",
    "speciesName": "Mantella auraniaca",
    "rarity": "Vanishing",
    "borders": {
      "left": ["purple"],
      "right": ["purple"],
      "top": ["purple"],
      "bottom": ["red"]
    },
    "energy": 11,
    "points": 14,
    "level": 4,
    "rulesType": "TURFSPECIES-REPTILE-4",
    "rulesText": "",
    "flavorText": "A herpetologist's favorite - known for eating anything, even if the tasts is repulsive. Eat them at your own risk - these colorful frogs are toxic!",
    "image": ""
  },
  "MM39": {
    "name": "Commerson's Leaf-nosed Bat",
    "pack": "Madagascar",
    "number": 39,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Hipposideros commersoni",
    "rarity": "Common",
    "borders": {
      "left": ["purple"],
      "right": ["red"],
      "top": ["purple"],
      "bottom": ["purple"]
    },
    "energy": 11,
    "points": 12,
    "level": 4,
    "rulesType": "TURFDIAGONAL",
    "rulesText": "This species may start a Turf War with a species diagonally.",
    "flavorText": "Holy bat-nose! With a wingspan of nearly 2 feet, it's one of the largest insectivors in Africa.",
    "image": ""
  },
  "MM40": {
    "name": "Hairy-eared Dwarf Lemur",
    "pack": "Madagascar",
    "number": 40,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Allocebus trichotis",
    "rarity": "Vanishing",
    "borders": {
      "left": ["purple"],
      "right": ["purple"],
      "top": ["purple"],
      "bottom": ["purple"]
    },
    "energy": 7,
    "points": 17,
    "level": 4,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "One of the rarest, smallest - and cutest - primates on the planet, once thought extinct, this lemur was \"rediscovered\" with the help of a Malagasy local.",
    "image": ""
  },
  "MM41": {
    "name": "Alluaudia Spiny Plant",
    "pack": "Madagascar",
    "number": 41,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Alluaudia montagnacii",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["yellow"],
      "bottom": ["yellow"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "PLANT-TROPHICCOUNT3",
    "rulesText": "This card cannot be involved in a Turf War. Eco-points = the number of level 3 species.",
    "flavorText": "A prickly perch.",
    "image": ""
  },
  "MM42": {
    "name": "Comet Orchid",
    "pack": "Madagascar",
    "number": 42,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Angraecum sesquipedale",
    "rarity": "Common",
    "borders": {
      "left": ["red"],
      "right": ["red"],
      "top": ["red"],
      "bottom": ["red"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "PLANT-HAWKMOTH",
    "rulesText": "This card cannot be involved in a Turf War. When you play this card, you may immediately play a Hawk Moth from your hand. A Hawk Moth card played in this way must be attached to this card.",
    "flavorText": "",
    "image": ""
  },
  "MM43": {
    "name": "Dutchman's Pipe",
    "pack": "Madagascar",
    "number": 43,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Aristolochia",
    "rarity": "Common",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 0,
    "level": 0,
    "rulesType": "PLANT-TROPHICCOUNT2",
    "rulesText": "This card cannot be involved in a Turf War. Eco-points = the number of level 2 species.",
    "flavorText": "The flowers of most Aristolochia emit a powerful stench - smells like rotting meat. Pee-eew!",
    "image": ""
  },
  "MM44": {
    "name": "Carnivorous Pitcher Plant",
    "pack": "Madagascar",
    "number": 44,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Nepenthes madagascariensis",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["yellow", "orange"],
      "top": ["yellow", "orange"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 0,
    "points": 0,
    "level": [0, 2],
    "rulesType": "PLANT-PITCHER",
    "rulesText": "Eco-points and Energy = the number of all Insect species.",
    "flavorText": "The pretty plant is deadly to bugs. Digests insects for a meal.",
    "image": ""
  },
  "MM45": {
    "name": "Voantany",
    "pack": "Madagascar",
    "number": 45,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Hydnora esculenta",
    "rarity": "Rare",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 3,
    "level": 0,
    "rulesType": "PLANT-SUNRISEDRAW",
    "rulesText": "This card cannot be involved in a Turf War. SUNRISE: At the beginning of your turn, you may draw an additional card.",
    "flavorText": "Lemurs' favorite. Extremely rare and known as \"fruit of the earth.\"",
    "image": ""
  },
  "MM46": {
    "name": "Grandidier Baobab",
    "pack": "Madagascar",
    "number": 46,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Adansonia grandidieri",
    "rarity": "Endangered",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["yellow"],
      "bottom": ["yellow"]
    },
    "energy": 0,
    "points": 3,
    "level": [0, 1, 4],
    "rulesType": "PLANT",
    "rulesText": "This card cannot be involved in a Turf War.",
    "flavorText": "African tree of life. Sacred.",
    "image": ""
  },
  "MM47": {
    "name": "White Lotus",
    "pack": "Madagascar",
    "number": 47,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Nymphaea lotus",
    "rarity": "Common",
    "borders": {
      "left": ["blue"],
      "right": ["blue"],
      "top": ["blue"],
      "bottom": ["blue"]
    },
    "energy": 0,
    "points": 5,
    "level": 0,
    "rulesType": "PLANT-ADJBOOST-1",
    "rulesText": "This card cannot be involved in a Turf War. Your adjacent species gain +1 Energy.",
    "flavorText": "An old and evolutionarily primitive beauty.",
    "image": ""
  },
  "MM48": {
    "name": "Tamarind Tree",
    "pack": "Madagascar",
    "number": 48,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Tamarindus indica",
    "rarity": "Common",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["yellow"],
      "bottom": ["yellow"]
    },
    "energy": 0,
    "points": 3,
    "level": 0,
    "rulesType": "PLANT-ADJBOOST-3",
    "rulesText": "This card cannot be involved in a Turf War. Your adjacent species gain +3 Energy.",
    "flavorText": "Lemur catta's favorite.",
    "image": ""
  },
  "MM49": {
    "name": "Travelers Palm",
    "pack": "Madagascar",
    "number": 49,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Ravenala madagascariensis",
    "rarity": "Common",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 0,
    "points": 4,
    "level": 0,
    "rulesType": "PLANT-ADJBOOST-2",
    "rulesText": "This card cannot be involved in a Turf War. Your adjacent species gain +2 Energy.",
    "flavorText": "A welcome sign.",
    "image": ""
  },
  "MM50": {
    "name": "Giant Bamboo",
    "pack": "Madagascar",
    "number": 50,
    "cardType": "Species",
    "speciesType": "Plant",
    "speciesName": "Cathariostachys madagascariensis",
    "rarity": "Common",
    "borders": {
      "left": ["red"],
      "right": ["red"],
      "top": ["red"],
      "bottom": ["red"]
    },
    "energy": 0,
    "points": 4,
    "level": 0,
    "rulesType": "PLANT-GIANTBAMBOO",
    "rulesText": "This card cannot be involved in a Turf War. If a Golden Bamboo Lemur is attached to this card, that card gains +5 Energy.",
    "flavorText": "High in protein as well as cyanide.",
    "image": ""
  },
  "MM51": {
    "name": "Indri",
    "pack": "Madagascar",
    "number": 51,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Indri indri",
    "rarity": "Endangered",
    "borders": {
      "left": ["blue"],
      "right": ["yellow", "blue"],
      "top": ["blue"],
      "bottom": ["yellow", "blue"]
    },
    "energy": 6,
    "points": 3,
    "level": 1,
    "rulesType": "TURFMOMENTUM",
    "rulesText": "If this species wins a Turf War, you may immediately play a Species card from you hand (playing that card does not start a Turf War).",
    "flavorText": "\"There it is.\"",
    "image": ""
  },
  "MM52": {
    "name": "Verreaux's Sifaka",
    "pack": "Madagascar",
    "number": 52,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Propithecus verreauxii",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow"],
      "right": ["blue"],
      "top": ["yellow", "blue"],
      "bottom": ["yellow", "blue"]
    },
    "energy": 9,
    "points": 5,
    "level": 1,
    "rulesType": "TURFINVADETROPHIC-2-3",
    "rulesText": "This species gets +3 Energy when invading a level 2 species.",
    "flavorText": "Great gliders. Capable of making giant jumps through trees - leaps of 30 ft are not uncommon!",
    "image": ""
  },
  "MM53": {
    "name": "Woolly Lemur",
    "pack": "Madagascar",
    "number": 53,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Avahi laniger",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "blue"],
      "right": ["yellow", "blue"],
      "top": [],
      "bottom": ["yellow", "blue"]
    },
    "energy": 8,
    "points": 6,
    "level": 1,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Out at night with eyes so bright.",
    "image": ""
  },
  "MM54": {
    "name": "Flat-tailed Tortoise",
    "pack": "Madagascar",
    "number": 54,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Pyxix planicauda",
    "rarity": "Endangered",
    "borders": {
      "left": ["yellow", "blue"],
      "right": ["yellow", "blue"],
      "top": ["yellow", "blue"],
      "bottom": []
    },
    "energy": 7,
    "points": 5,
    "level": 1,
    "rulesType": "TURFINVADETROPHIC-1-5",
    "rulesText": "This species gets +5 Energy when invading a level 1 species.",
    "flavorText": "Known locally as Kapidolo (ghost turtle).",
    "image": ""
  },
  "MM55": {
    "name": "Katydid",
    "pack": "Madagascar",
    "number": 55,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Aspidonotus spinosus",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "blue"],
      "right": ["blue"],
      "top": [],
      "bottom": ["yellow", "blue"]
    },
    "energy": 10,
    "points": 5,
    "level": 1,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "What can a bug do to hide? Make like a tree and leaf!",
    "image": ""
  },
  "MM56": {
    "name": "Spider Tortoise",
    "pack": "Madagascar",
    "number": 56,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Pyxis arachnoides",
    "rarity": "Common",
    "borders": {
      "left": ["blue"],
      "right": ["blue"],
      "top": ["yellow", "blue"],
      "bottom": []
    },
    "energy": 10,
    "points": 5,
    "level": 1,
    "rulesType": "TURFDIAGONAL",
    "rulesText": "Predator: This species may start a Turf War with a species diagonally.",
    "flavorText": "Tortoises are sacred and lucky! It is fady to harm them.",
    "image": ""
  },
  "MM57": {
    "name": "Fire Millipede",
    "pack": "Madagascar",
    "number": 57,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Aphistogoniulus",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "blue"],
      "right": ["blue"],
      "top": [],
      "bottom": ["yellow", "blue"]
    },
    "energy": 9,
    "points": 5,
    "level": 1,
    "rulesType": "TURFFEROCITY-4",
    "rulesText": "Ferocity 4: This species gets +4 Energy when it is the invading species.",
    "flavorText": "Ready ... Aim ... Millipede!",
    "image": ""
  },
  "MM58": {
    "name": "Madagascar Hissing Cockroach",
    "pack": "Madagascar",
    "number": 58,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Gromphadorhina portentosa",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "blue"],
      "right": ["yellow", "blue"],
      "top": ["yellow", "blue"],
      "bottom": []
    },
    "energy": 12,
    "points": 2,
    "level": 1,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Giant cockroaches that hisssssss. Hisssssss. Hissssssssssssssssss.",
    "image": ""
  },
  "MM59": {
    "name": "Comet Moth",
    "pack": "Madagascar",
    "number": 59,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Argema mittrei",
    "rarity": "Common",
    "borders": {
      "left": ["blue"],
      "right": ["blue"],
      "top": ["blue"],
      "bottom": ["blue"]
    },
    "energy": 8,
    "points": 5,
    "level": 1,
    "rulesType": "MORPH-1",
    "rulesText": "Morph 1: You may draw 1 card at the beginning of any Turf War involving this species.",
    "flavorText": "These gentle flyers have up to 8-inch wing spans. Tres bizarre: Adult comet moths have no mouths!",
    "image": ""
  },
  "MM60": {
    "name": "Giraffe-necked Weevil",
    "pack": "Madagascar",
    "number": 60,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Trachelophorus giraffa",
    "rarity": "Common",
    "borders": {
      "left": ["blue", "yellow"],
      "right": ["blue", "yellow"],
      "top": ["blue", "yellow"],
      "bottom": ["blue", "yellow"]
    },
    "energy": 6,
    "points": 4,
    "level": 1,
    "rulesType": "SUNRISE-MIGRATE-2",
    "rulesText": "SUNRISE: Migrate: Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turf War).",
    "flavorText": "",
    "image": ""
  },
  "MM61": {
    "name": "Clear-winged Butterfly",
    "pack": "Madagascar",
    "number": 61,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Undefined",
    "rarity": "Common",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 8,
    "points": 4,
    "level": 1,
    "rulesType": "TURFINVADETROPHIC-3-8",
    "rulesText": "This species gets +8 Energy when invading a species.",
    "flavorText": "Field agents report in: Help Xeko learn the scientific name for this fancy flyer.",
    "image": ""
  },
  "MM62": {
    "name": "Yellow-line Caterpillar",
    "pack": "Madagascar",
    "number": 62,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Lymantriidae",
    "rarity": "Common",
    "borders": {
      "left": ["blue"],
      "right": ["blue", "yellow"],
      "top": ["blue"],
      "bottom": ["blue", "yellow"]
    },
    "energy": 8,
    "points": 6,
    "level": 1,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "This caterpillar eats and eats, munching leaves for a treat.",
    "image": ""
  },
  "MM63": {
    "name": "Orange Pill Millipede",
    "pack": "Madagascar",
    "number": 63,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Diplopoda",
    "rarity": "Common",
    "borders": {
      "left": ["blue", "yellow"],
      "right": ["yellow"],
      "top": ["blue"],
      "bottom": ["blue"]
    },
    "energy": 8,
    "points": 6,
    "level": 1,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Two pairs of legs on every ring, makes me so happy I could sing!",
    "image": ""
  },
  "MM64": {
    "name": "Radiated Tortoise",
    "pack": "Madagascar",
    "number": 64,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Geochelone radiata",
    "rarity": "Rare",
    "borders": {
      "left": ["blue"],
      "right": ["blue", "yellow"],
      "top": ["blue"],
      "bottom": ["blue", "yellow"]
    },
    "energy": 10,
    "points": 5,
    "level": 1,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "One of the rarest tortoises. Rod's favorite - a true star.",
    "image": ""
  },
  "MM65": {
    "name": "Gold Tortoise Beetle",
    "pack": "Madagascar",
    "number": 65,
    "cardType": "Species",
    "speciesType": "Insect",
    "speciesName": "Cassidinae",
    "rarity": "Common",
    "borders": {
      "left": ["blue"],
      "right": ["yellow"],
      "top": ["blue"],
      "bottom": ["blue"]
    },
    "energy": 7,
    "points": 6,
    "level": 1,
    "rulesType": "FEROCITY-4",
    "rulesText": "Ferocity 4: This species gets +4 Energy when it is the invading species.",
    "flavorText": "This lucky bug looks like it's wearing a space suit.",
    "image": ""
  },
  "MM66": {
    "name": "Madagascar Serpent Eagle",
    "pack": "Madagascar",
    "number": 66,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Eutriochis astur",
    "rarity": "Endangered",
    "borders": {
      "left": ["orange", "red"],
      "right": ["red", "orange"],
      "top": [],
      "bottom": ["orange", "red"]
    },
    "energy": 5,
    "points": 8,
    "level": 3,
    "rulesType": "TURFSPECIES-REPTILE-8",
    "rulesText": "This species gets +8 Energy when involved in a Turf War with a Reptile species.",
    "flavorText": "Recently rediscovered species - once thought to be extinct...",
    "image": ""
  },
  "MM67": {
    "name": "Madagascar Leaf-nosed Snake",
    "pack": "Madagascar",
    "number": 67,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Langaha madagascariensis",
    "rarity": "Common",
    "borders": {
      "left": ["orange", "red"],
      "right": [],
      "top": ["orange", "red"],
      "bottom": ["orange", "red"]
    },
    "energy": 6,
    "points": 11,
    "level": 3,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Is that branch mooooooving? It's a snake ... make that two snakes! The male has a \"stick\" nose and the female a \"leaf\".",
    "image": ""
  },
  "MM68": {
    "name": "Olive Ridley Sea Turtle",
    "pack": "Madagascar",
    "number": 68,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Lepidochelys olivacea",
    "rarity": "Endangered",
    "borders": {
      "left": ["orange", "red"],
      "right": [],
      "top": ["orange", "red"],
      "bottom": ["orange", "red"]
    },
    "energy": 10,
    "points": 7,
    "level": 3,
    "rulesType": "SUNRISE-MIGRATE-2",
    "rulesText": "SUNRISE: Migrate: Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turf War).",
    "flavorText": "",
    "image": ""
  },
  "MM69": {
    "name": "Madagascan Tree Boa",
    "pack": "Madagascar",
    "number": 69,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Sanzinia madagascariensis",
    "rarity": "Rare",
    "borders": {
      "left": ["orange", "red"],
      "right": ["orange", "red"],
      "top": [],
      "bottom": ["orange", "red"]
    },
    "energy": 10,
    "points": 6,
    "level": 3,
    "rulesType": "MORPH-2",
    "rulesText": "Morph 2: You may draw up to 2 cards at the beginning of any Turf War involving this species.",
    "flavorText": "Sssssssssnakes are sssssssacred.",
    "image": ""
  },
  "MM70": {
    "name": "Sickle-billed Vanga",
    "pack": "Madagascar",
    "number": 70,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Falculea palliata",
    "rarity": "Common",
    "borders": {
      "left": ["red"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["red", "orange"]
    },
    "energy": 8,
    "points": 8,
    "level": 3,
    "rulesType": "SUNRISE-WARNING",
    "rulesText": "SUNRISE: Warning Call: At the beginning of your turn, you may move your adjacent species to another legal spot on the board (this move does not cause a Turf War).",
    "flavorText": "",
    "image": ""
  },
  "MM71": {
    "name": "Madagascar Crested Ibis",
    "pack": "Madagascar",
    "number": 71,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Lophotibis cristata",
    "rarity": "Common",
    "borders": {
      "left": ["red"],
      "right": ["orange"],
      "top": ["red", "orange"],
      "bottom": ["red"]
    },
    "energy": 11,
    "points": 10,
    "level": 3,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Large terrestrial bird with chestnut coloring, green crest, large curved bill and white wings. SQUAWK!",
    "image": ""
  },
  "MM72": {
    "name": "Scorpion",
    "pack": "Madagascar",
    "number": 72,
    "cardType": "Species",
    "speciesType": "Arachnid",
    "speciesName": "Grosphus palpator",
    "rarity": "Common",
    "borders": {
      "left": ["orange", "red"],
      "right": ["orange", "red"],
      "top": [],
      "bottom": ["orange", "red"]
    },
    "energy": 13,
    "points": 5,
    "level": 3,
    "rulesType": "TURFDIAGONAL",
    "rulesText": "Predator: This species may start a Turf War with a species diagonally.",
    "flavorText": "Beware the scorpion's sting.",
    "image": ""
  },
  "MM73": {
    "name": "Madagascar Sideneck Turtle",
    "pack": "Madagascar",
    "number": 73,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Erymnochelys madagascariensis",
    "rarity": "Endangered",
    "borders": {
      "left": ["orange"],
      "right": ["red"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 12,
    "points": 9,
    "level": 3,
    "rulesType": "SUNRISE-MIGRATE-2",
    "rulesText": "SUNRISE: Migrate: Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turf War).",
    "flavorText": "",
    "image": ""
  },
  "MM74": {
    "name": "Madagascar Ground Boa",
    "pack": "Madagascar",
    "number": 74,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Acrantophis madagascariensis",
    "rarity": "Rare",
    "borders": {
      "left": ["red"],
      "right": [],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 9,
    "points": 11,
    "level": 3,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Ssssssssss ... I have room for ... ssssssssss ... one more.",
    "image": ""
  },
  "MM75": {
    "name": "Madagascar Heron",
    "pack": "Madagascar",
    "number": 75,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Ardea humbloti",
    "rarity": "Endangered",
    "borders": {
      "left": ["red"],
      "right": ["orange"],
      "top": ["orange"],
      "bottom": ["red"]
    },
    "energy": 10,
    "points": 8,
    "level": 3,
    "rulesType": "DEFEND-4-4",
    "rulesText": "This species gets +4 Energy when invaded by a level 4 species.",
    "flavorText": "This wetland wonder likes fresh fish.",
    "image": ""
  },
  "MM76": {
    "name": "Striped Civet",
    "pack": "Madagascar",
    "number": 76,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Fossa fossana",
    "rarity": "Rare",
    "borders": {
      "left": ["orange"],
      "right": ["orange", "red"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 12,
    "points": 9,
    "level": 3,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Fat tails! Striped Civets store fat reserves in their tails as an energy source for winter.",
    "image": ""
  },
  "MM77": {
    "name": "Madagascar Red Owl",
    "pack": "Madagascar",
    "number": 77,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Tyto soumagnei",
    "rarity": "Endangered",
    "borders": {
      "left": ["red"],
      "right": ["orange", "red"],
      "top": ["red"],
      "bottom": ["red"]
    },
    "energy": 13,
    "points": 11,
    "level": 3,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "One of the 50 rarest birds in the world. Voice: Hissing call.",
    "image": ""
  },
  "MM78": {
    "name": "Loggerhead Sea Turtle",
    "pack": "Madagascar",
    "number": 78,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Caretta caretta",
    "rarity": "Rare",
    "borders": {
      "left": ["orange"],
      "right": ["orange"],
      "top": ["red"],
      "bottom": ["orange", "red"]
    },
    "energy": 12,
    "points": 8,
    "level": 3,
    "rulesType": "SUNRISE-MIGRATE-2",
    "rulesText": "SUNRISE: Migrate: Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turf War).",
    "flavorText": "",
    "image": ""
  },
  "MM79": {
    "name": "Leatherback Sea Turtle",
    "pack": "Madagascar",
    "number": 79,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Dermochelys coiacea",
    "rarity": "Endangered",
    "borders": {
      "left": ["red"],
      "right": ["red"],
      "top": ["orange"],
      "bottom": ["orange"]
    },
    "energy": 12,
    "points": 10,
    "level": 3,
    "rulesType": "NEST-4",
    "rulesText": "Nest 4: This species gets +4 Energy when it is the defending species.",
    "flavorText": "Found from tropical to sub-polar oceans.",
    "image": ""
  },
  "MM80": {
    "name": "Panther Chameleon",
    "pack": "Madagascar",
    "number": 80,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Furcifer pardalis",
    "rarity": "Rare",
    "borders": {
      "left": ["red"],
      "right": ["red"],
      "top": ["red", "orange"],
      "bottom": ["red"]
    },
    "energy": 10,
    "points": 9,
    "level": 3,
    "rulesType": "SUNRISE-WARNING",
    "rulesText": "SUNRISE: Warning Call: At the beginning of your turn, you may move an adjacent species to another legal spot on the board (this move does not cause a Turf War).",
    "flavorText": "",
    "image": ""
  },
  "MM81": {
    "name": "Thorn Spider",
    "pack": "Madagascar",
    "number": 81,
    "cardType": "Species",
    "speciesType": "Arachnid",
    "speciesName": "Gasteracantha versicolor",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "orange"],
      "right": [],
      "top": ["orange", "yellow"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 10,
    "points": 5,
    "level": 2,
    "rulesType": "FEROCITY-2",
    "rulesText": "Ferocity 2: This species gets +2 Energy when it is the invading species.",
    "flavorText": "Fake eyes fake out!",
    "image": ""
  },
  "MM82": {
    "name": "Oustalet's Chameleon",
    "pack": "Madagascar",
    "number": 82,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Furcifer oustaleti",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["yellow", "orange"],
      "top": [],
      "bottom": ["yellow", "orange"]
    },
    "energy": 10,
    "points": 5,
    "level": 2,
    "rulesType": "NEST-3",
    "rulesText": "Nest 3: This species gets +3 Energy when it is the defending species.",
    "flavorText": "\"Go about life the way a chameleon walk; face what is in front and look back at what is behind.\" - Malagasy Proverb",
    "image": ""
  },
  "MM83": {
    "name": "Van Dam's Vagna",
    "pack": "Madagascar",
    "number": 83,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Xenopirostris damii",
    "rarity": "Endangered",
    "borders": {
      "left": ["yellow", "orange"],
      "right": ["yellow", "orange"],
      "top": ["yellow", "orange"],
      "bottom": []
    },
    "energy": 10,
    "points": 6,
    "level": 2,
    "rulesType": "SUNRISE-MIGRATE-2",
    "rulesText": "SUNRISE: Migrate Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turt War).",
    "flavorText": "Calls TSEEANG very loudly.",
    "image": ""
  },
  "MM84": {
    "name": "Greater Hedgehog Tenrec",
    "pack": "Madagascar",
    "number": 84,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Setifer setosus",
    "rarity": "Common",
    "borders": {
      "left": ["yellow", "orange"],
      "right": [],
      "top": ["yellow", "orange"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 11,
    "points": 6,
    "level": 2,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "Shake, rattle and roll! Masters of stridulation (the vibrating of spines to produce a rasping sound) this is one animal that you don't want to upset!",
    "image": ""
  },
  "MM85": {
    "name": "Aye-aye",
    "pack": "Madagascar",
    "number": 85,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Daubentonia madagascariensis",
    "rarity": "Endangered",
    "borders": {
      "left": ["orange"],
      "right": ["yellow", "orange"],
      "top": ["yellow"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 10,
    "points": 7,
    "level": 2,
    "rulesType": "TURFSPECIES-INSECT-8",
    "rulesText": "This species gets +4 Energy when invading an Insect species.",
    "flavorText": "This nocturnal lemur has continuously-growing incisor teeth and EXTRA-long middle fingers (great for digging grubs).",
    "image": ""
  },
  "MM86": {
    "name": "Giant Jumping Rat",
    "pack": "Madagascar",
    "number": 86,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Hypogeomys antimena",
    "rarity": "Endangered",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["yellow", "blue"],
      "bottom": ["blue"]
    },
    "energy": 6,
    "points": 6,
    "level": 2,
    "rulesType": "MORPH-3",
    "rulesText": "Morph 3: You may draw up to 3 cards at the beginning of any Turf War involving this species.",
    "flavorText": "Is that a rat or a kangaroo???",
    "image": ""
  },
  "MM87": {
    "name": "Brown Mouse Lemur",
    "pack": "Madagascar",
    "number": 87,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Microcebus griseorufus",
    "rarity": "Endangered",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["blue"],
      "bottom": ["yellow"]
    },
    "energy": 5,
    "points": 4,
    "level": 2,
    "rulesType": "TURFMOMENTUM",
    "rulesText": "If this species wins a Turf War, you may immediately play a species card from your hand (playing that card does not start a Turf War).",
    "flavorText": "The smallest primate on the planet is as small as a walnut!",
    "image": ""
  },
  "MM88": {
    "name": "Madagascar Flying Fox",
    "pack": "Madagascar",
    "number": 88,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Pteropus rufus",
    "rarity": "Rare",
    "borders": {
      "left": ["blue", "yellow"],
      "right": ["yellow"],
      "top": ["yellow"],
      "bottom": ["blue", "yellow"]
    },
    "energy": 12,
    "points": 4,
    "level": 2,
    "rulesType": "TURFDIAGONAL",
    "rulesText": "Predator: This species may start a Turf War with a species diagonally.",
    "flavorText": "Quiet shadows come gliding in. These nocturnal flyers are seed spreaders.",
    "image": ""
  },
  "MM90": {
    "name": "Madagascar Ground Gecko",
    "pack": "Madagascar",
    "number": 90,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Paroedura pictus",
    "rarity": "Common",
    "borders": {
      "left": ["yellow"],
      "right": ["orange"],
      "top": ["yellow"],
      "bottom": ["yellow", "orange"]
    },
    "energy": 10,
    "points": 5,
    "level": 2,
    "rulesType": "MORPH-2",
    "rulesText": "Morph 2: You may draw up to 2 cards at the beginning of any Turf War involving this species.",
    "flavorText": "Well grounded - Pictus does not climb walls.",
    "image": ""
  },
  "MM91": {
    "name": "Running Coua",
    "pack": "Madagascar",
    "number": 91,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Coua cursor",
    "rarity": "Common",
    "borders": {
      "left": ["orange"],
      "right": ["orange", "yellow"],
      "top": ["yellow"],
      "bottom": ["yellow"]
    },
    "energy": 10,
    "points": 5,
    "level": 2,
    "rulesType": "SUNRISE-MIGRATE-2",
    "rulesText": "SUNRISE: Migrate: Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turf War).",
    "flavorText": "Vivid blue eye-patch.",
    "image": ""
  },
  "MM92": {
    "name": "Coppery Day Gecko",
    "pack": "Madagascar",
    "number": 92,
    "cardType": "Species",
    "speciesType": "Reptile",
    "speciesName": "Phelsuma madagascariensis",
    "rarity": "Common",
    "borders": {
      "left": ["yellow"],
      "right": ["blue"],
      "top": ["yellow"],
      "bottom": ["blue", "yellow"]
    },
    "energy": 9,
    "points": 6,
    "level": 2,
    "rulesType": "",
    "rulesText": "",
    "flavorText": "To hear a gecko bark is good luck (and good hearing)!",
    "image": ""
  },
  "MM93": {
    "name": "White-breasted Mesite",
    "pack": "Madagascar",
    "number": 93,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Mesitornis variegata",
    "rarity": "Rare",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow"],
      "top": ["orange", "yellow"],
      "bottom": ["yellow"]
    },
    "energy": 7,
    "points": 8,
    "level": 2,
    "rulesType": "DEFEND-2-4",
    "rulesText": "This species gets +4 Energy when invaded by a level 2 species.",
    "flavorText": "Walks slowly, flicking over leaves in search of snacks.",
    "image": ""
  },
  "MM94": {
    "name": "Ring-tailed Lemur",
    "pack": "Madagascar",
    "number": 94,
    "cardType": "Species",
    "speciesType": "Mammal",
    "speciesName": "Lemur catta",
    "rarity": "Rare",
    "borders": {
      "left": ["blue"],
      "right": ["yellow"],
      "top": ["yellow", "blue"],
      "bottom": ["yellow"]
    },
    "energy": 8,
    "points": 5,
    "level": 2,
    "rulesType": "DEFEND-1-4",
    "rulesText": "This species gets +4 Energy when invaded by a level 1 species.",
    "flavorText": "Ambassador. Social, keen sense of smell, and a fabulous ring tail.",
    "image": ""
  },
  "MM95": {
    "name": "Madagascar Teal",
    "pack": "Madagascar",
    "number": 95,
    "cardType": "Species",
    "speciesType": "Bird",
    "speciesName": "Anas bernieri",
    "rarity": "Endangered",
    "borders": {
      "left": ["yellow"],
      "right": ["yellow", "blue"],
      "top": ["orange"],
      "bottom": ["yellow"]
    },
    "energy": 5,
    "points": 2,
    "level": 2,
    "rulesType": "DEFEND-3-5",
    "rulesText": "This species gets +5 Energy when invaded by a level 3 species.",
    "flavorText": "Small dabbling duck. The rarest duck in the world.",
    "image": ""
  },
  "MM96": {
    "name": "Compass",
    "pack": "Madagascar",
    "number": 96,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1],
    "rulesType": "",
    "rulesText": "Move a species you own to another legal spot on the board (this movement does not start a Turf War).",
    "flavorText": "The compass enables field agents to move like magic. -XM",
    "image": ""
  },
  "MM97": {
    "name": "Three Totems",
    "pack": "Madagascar",
    "number": 97,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 1],
    "rulesType": "",
    "rulesText": "Choose a player. That player draws 3 cards.",
    "flavorText": "Local culture is almost as endangered as the animals. Three is considered a lucky number - whose luck is it? - ZX",
    "image": ""
  },
  "MM98": {
    "name": "Field Binoculars",
    "pack": "Madagascar",
    "number": 98,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 1, 2],
    "rulesType": "",
    "rulesText": "Look at an opponent's hand and choose a card. That card is discarded.",
    "flavorText": "My Xeko binocs seem to have some new features... can't wait to test these tomorrow. - XFA",
    "image": ""
  },
  "MM99": {
    "name": "Eco-map",
    "pack": "Madagascar",
    "number": 99,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 4],
    "rulesType": "",
    "rulesText": "Look at the top 3 crds in your Draw Pile, keep one and arrange the rest on top of your Draw Pile in any order.",
    "flavorText": "The lemurs on my eco-map are moving ... wonder what's up? - XFA",
    "image": ""
  },
  "MM100": {
    "name": "Field Kit",
    "pack": "Madagascar",
    "number": 100,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 1, 3],
    "rulesType": "",
    "rulesText": "Search your Draw Pile for a level 0 Species card and put it in your hand. Shuffle your Draw Pile.",
    "flavorText": "Spare socks came in handy after a day tracking lemurs in the rainforest. - XFA",
    "image": ""
  },
  "MM101": {
    "name": "Ambassador's Pass",
    "pack": "Madagascar",
    "number": 101,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [2, 2],
    "rulesType": "",
    "rulesText": "Move any species to another legal spot on the board (this does no start a Turf War).",
    "flavorText": "Send thank you to King Andrianampoinimerinandriansimitoviaminandriampanjaka. - ZA",
    "image": ""
  },
  "MM102": {
    "name": "Forest Fire",
    "pack": "Madagascar",
    "number": 102,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 2],
    "rulesType": "",
    "rulesText": "Opponent sheds 5 cards.",
    "flavorText": "A fire wiped out a good deal of habitat in the Northeast. Wonder what caused it? - XFA",
    "image": ""
  },
  "MM103": {
    "name": "16 Palm Nuts",
    "pack": "Madagascar",
    "number": 103,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 2, 3],
    "rulesType": "",
    "rulesText": "Choose a player. That player draws 5 cards.",
    "flavorText": "An ombiasy read my palm nuts - said Dozers were afoot. -XFA",
    "image": ""
  },
  "MM104": {
    "name": "Code: LAMINA",
    "pack": "Madagascar",
    "number": 104,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1],
    "rulesType": "",
    "rulesText": "No Boost cards may be played this turn.",
    "flavorText": "Encoded message from XHQ.",
    "image": ""
  },
  "MM105": {
    "name": "Peace Offering",
    "pack": "Madagascar",
    "number": 105,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [0, 1, 2],
    "rulesType": "",
    "rulesText": "Play a Species card right now. This card does not start a Turf War.",
    "flavorText": "\"Fandriampahalemana\" means \"peace\" in Malagasy. - ZX",
    "image": ""
  },
  "MM106": {
    "name": "Elemental: Air",
    "pack": "Madagascar",
    "number": 106,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Common",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [3],
    "rulesType": "",
    "rulesText": "Draw 2 cards. Shuffle this card back into your Draw Pile.",
    "flavorText": "Elemental at your service!",
    "image": ""
  },
  "MM107": {
    "name": "Elemental: Water",
    "pack": "Madagascar",
    "number": 107,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [3, 3],
    "rulesType": "",
    "rulesText": "Shuffle 3 random cards from your Shed Pile into your Draw Pile.",
    "flavorText": "Elemental at your service!",
    "image": ""
  },
  "MM108": {
    "name": "Elemental: Earth",
    "pack": "Madagascar",
    "number": 108,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [3, 3],
    "rulesType": "",
    "rulesText": "Discard from your hand as many cards as you wish. Draw cards until you have 5 in your hand.",
    "flavorText": "Elemental at your service!",
    "image": ""
  },
  "MM109": {
    "name": "New Reserve",
    "pack": "Madagascar",
    "number": 109,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Vanishing",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [3, 3, 3],
    "rulesType": "",
    "rulesText": "You may put a second species in play this turn. Both Species cards may be involved in Turf Wars as normal.",
    "flavorText": "President declared new reserve - can't wait to tell XHQ! - XFA",
    "image": ""
  },
  "MM110": {
    "name": "Critical Levels",
    "pack": "Madagascar",
    "number": 110,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [2, 3, 3],
    "rulesType": "",
    "rulesText": "Choose one of your species in play and one of your opponent's species in play. both are moved to their owners' Shed Piles.",
    "flavorText": "Urgent: Warning sign spotted - habitat too weak. Need more help. - XFA",
    "image": ""
  },
  "MM111": {
    "name": "Smuggler Captured",
    "pack": "Madagascar",
    "number": 111,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [4, 4],
    "rulesType": "",
    "rulesText": "Choose one of your species in play and return it to your hand. You may replace it with a Species card from you hand (this card does not start a Turf War and must be a legal play).",
    "flavorText": "",
    "image": ""
  },
  "MM112": {
    "name": "Ancient Text",
    "pack": "Madagascar",
    "number": 112,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 1, 4],
    "rulesType": "",
    "rulesText": "Look at the top 5 cards in your Draw Pile, keep one and arrange the rest on top of your Draw Pile in any order.",
    "flavorText": "Sorabe found by XFA - what an incredible knowledge trove! - ZA",
    "image": ""
  },
  "MM113": {
    "name": "Vintana: Destiny",
    "pack": "Madagascar",
    "number": 113,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [1, 2, 3, 4],
    "rulesType": "",
    "rulesText": "Search your Draw Pile for any card and put it into your hand. If you choose Golden Bamboo Lemur, you may put it directly into play. Shuffle your Draw Pile.",
    "flavorText": "",
    "image": ""
  },
  "MM114": {
    "name": "Dozer Mischief",
    "pack": "Madagascar",
    "number": 114,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Rare",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [3, 4],
    "rulesType": "",
    "rulesText": "Move a level 1 species from the field to its owner's Shed Pile.",
    "flavorText": "Dozers strike again! - XFA",
    "image": ""
  },
  "MM115": {
    "name": "Elemental: Fire",
    "pack": "Madagascar",
    "number": 115,
    "cardType": "Xeko",
    "speciesType": "",
    "speciesName": "",
    "rarity": "Endangered",
    "borders": {
      "top": [],
      "bottom": [],
      "left": [],
      "right": []
    },
    "energy": 0,
    "points": 0,
    "level": [2, 3, 4],
    "rulesType": "",
    "rulesText": "Choose a level 4 species in play and move it to its owner's Shed Pile.",
    "flavorText": "Elemental at your service!",
    "image": ""
  },
  "MM116": {
    "name": "Madagascar - Hotspot",
    "pack": "Madagascar",
    "number": 116,
    "cardType": "Hotspot",
    "speciesType": "",
    "speciesName": "",
    "rarity": "",
    "borders": {
      "top": ["blue"],
      "bottom": ["blue"],
      "left": ["blue"],
      "right": ["blue"]
    },
    "energy": 0,
    "points": 0,
    "level": [],
    "rulesType": "",
    "rulesText": "",
    "flavorText": "",
    "image": ""
  }
};
const packStringToEnum = new Map([
  ['Madagascar', Pack.madagascar],
  ['Costa Rica', Pack.costarica],
  ['Indonesia', Pack.indonesia],
  ['China', Pack.china]
]);
const rarityStringToEnum = new Map([
  ['Endangered', Rarity.endangered],
  ['Common', Rarity.common],
  ['Rare', Rarity.rare],
  ['Vanishing', Rarity.vanishing],
]);
const cardTypeStringToEnum = new Map([
  ['Hotspot', CardType.hotspot],
  ['Species', CardType.species],
  ['Boost', CardType.boost],
  ['Xeko', CardType.xeko]
]);
const borderStringToEnum = new Map([
  ['blue', CardBorderColors.blue],
  ['red', CardBorderColors.red],
  ['purple', CardBorderColors.purple],
  ['yellow', CardBorderColors.yellow],
  ['orange', CardBorderColors.orange]
]);
const speciesTypeToEnum = new Map([
  ['amphibian', SpeciesType.amphibian],
  ['bird', SpeciesType.bird],
  ['insect', SpeciesType.insect],
  ['mammal', SpeciesType.mammal],
  ['plant', SpeciesType.plant],
  ['reptile', SpeciesType.reptile],
]);
const madagascarCardData = Object.entries(data).map(([key, value]) => {
  return {
    id: key,
    name: value.name,
    pack: packStringToEnum.get(value.pack),
    number: value.number,
    rarity: rarityStringToEnum.get(value.rarity),
    cardType: cardTypeStringToEnum.get(value.cardType),
    speciesType: speciesTypeToEnum.get(value.speciesType),
    scientificName: value.speciesName,
    borders: {
      left: new Set(value.borders.left.map(borderString => borderStringToEnum.get(borderString))),
      right: new Set(value.borders.right.map(borderString => borderStringToEnum.get(borderString))),
      top: new Set(value.borders.top.map(borderString => borderStringToEnum.get(borderString))),
      bottom: new Set(value.borders.bottom.map(borderString => borderStringToEnum.get(borderString)))
    },
    energy: value.energy,
    points: value.points,
    level: typeof value.level === 'number' ? value.level : -1,
    rulesText: value.rulesText,
    flavorText: value.flavorText,
    requiredLevels: new Set(typeof value.level === 'number' ? [] : value.level)
  };
});
const madagascarNavData = {
  deck: 'Madagascar',
  cards: madagascarCardData.map(card => ({ name: card.name, id: card.id }))
};

export { CardType as C, Rarity as R, SpeciesType as S, madagascarCardData as a, madagascarNavData as m };
