import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { CardBorderColors, CardData, CardType, Pack, Rarity, SpeciesType } from './info-definitions';

const assetPrefix = '/assets/';

const speciesTypeToString: Map<SpeciesType, string> = new Map([
  [SpeciesType.amphibian, 'Amphibian'],
  [SpeciesType.bird, 'Bird'],
  [SpeciesType.insect, 'Insect'],
  [SpeciesType.mammal, 'Mammal'],
  [SpeciesType.plant, 'Plant'],
  [SpeciesType.reptile, 'Reptile']
]);
const rarityToString: Map<Rarity, string> = new Map([
  [Rarity.common, 'Common'], 
  [Rarity.vanishing, 'Vanishing'], 
  [Rarity.rare, 'Rare'], 
  [Rarity.endangered, 'Endangered']
]);
const packToString: Map<Pack, string> = new Map([
  [Pack.madagascar, 'Madagascar'],
  [Pack.costarica, 'Costa Rica'],
  [Pack.indonesia, 'Indonesia'],
  [Pack.china, 'China']
]);

const cardBorderColorToString: Map<CardBorderColors, string> = new Map([
  [CardBorderColors.blue, 'blue'],
  [CardBorderColors.orange, 'orange'],
  [CardBorderColors.purple, 'purple'],
  [CardBorderColors.red, 'red'],
  [CardBorderColors.yellow, 'yellow'],
  [null, 'transparent']
]);

@Component({
  tag: 'info-article',
  styleUrl: 'info-article.css',
  shadow: true,
})
export class InfoArticle {

  @Prop() imgSrc = 'test.png';
  @Prop() cardData: CardData;
  @Watch('cardData')
  onCardDataChange() {
    console.log('infopanel carddata', this.cardData);
    this.topBorderColors = this.generateBorders(this.cardData?.borders?.top);
    this.bottomBorderColors = this.generateBorders(this.cardData?.borders?.bottom);
    this.leftBorderColors = this.generateBorders(this.cardData?.borders?.left);
    this.rightBorderColors = this.generateBorders(this.cardData?.borders?.right);
  }

  @State() topBorderColors = [];
  @State() leftBorderColors = [];
  @State() rightBorderColors = [];
  @State() bottomBorderColors = [];

  private generateBorders(borderSet: Set<CardBorderColors>) {
    if (!borderSet || borderSet.size === 0) {
      return [cardBorderColorToString.get(null), cardBorderColorToString.get(null)];
    } else if (borderSet.size === 1) {
      const entries = Array.from(borderSet.values());
      console.log('single', entries);
      return [cardBorderColorToString.get(entries[0]), cardBorderColorToString.get(entries[0])];
    } else {
      const entries = Array.from(borderSet.values());
      console.log('double', entries);
      return [cardBorderColorToString.get(entries[0]), cardBorderColorToString.get(entries[1])];
    }
  }

  componentDidLoad() {
    console.log(this.cardData);
    this.topBorderColors = this.generateBorders(this.cardData?.borders?.top);
    this.bottomBorderColors = this.generateBorders(this.cardData?.borders?.bottom);
    this.leftBorderColors = this.generateBorders(this.cardData?.borders?.left);
    this.rightBorderColors = this.generateBorders(this.cardData?.borders?.right);
    console.log(this.topBorderColors)
    console.log(this.bottomBorderColors)
    console.log(this.leftBorderColors)
    console.log(this.rightBorderColors)
  }

  render() {
    return (
      <Host>
        {/* Actual info coming soon, I'll fill this out once I can query an API for info... */}
        <div class='img-wrapper'>
          <div class='token-wrapper'>
            <div class="token"></div>
            <div class="token"></div>
            <div class="token"></div>
          </div>
          <div class='border-wrapper'>
            <div id='top-border' class='border'>
              <div class='left' style={{'background-color': this.topBorderColors[0]}}></div>
              <div class='right' style={{'background-color': this.topBorderColors[1]}}></div>
            </div>
            <div id='bottom-border' class='border'>
              <div class='left' style={{'background-color': this.bottomBorderColors[0]}}></div>
              <div class='right' style={{'background-color': this.bottomBorderColors[1]}}></div>
            </div>
            <div id='left-border' class='border'>
              <div class='top' style={{'background-color': this.leftBorderColors[0]}}></div>
              <div class='bottom' style={{'background-color': this.leftBorderColors[1]}}></div>
            </div>
            <div id='right-border' class='border'>
              <div class='top' style={{'background-color': this.rightBorderColors[0]}}></div>
              <div class='bottom' style={{'background-color': this.rightBorderColors[1]}}></div>
            </div>
            <img src={`${assetPrefix}${this.imgSrc}`}></img>
          </div>
          <div class='pack-wrapper'>
            <div class="token"></div>
          </div>
        </div>
        <div class='text-wrapper'>
          <div>
            <span>Pack: </span>{packToString.get(this.cardData?.pack)}
          </div>
          <div>
            <span>Number: </span>{this.cardData?.number}
          </div>
          <div>
            <span>Rarity: </span>{rarityToString.get(this.cardData?.rarity)}
          </div>
          {
            // species card case
            (this.cardData?.cardType === CardType.species) ?
              [
                <div>
                  <span>Level: </span>{this.cardData.level}
                </div>,
                <div>
                  <span>Species Type: </span>{speciesTypeToString.get(this.cardData.speciesType)}
                </div>,
                <div>
                  <span>Scientific Name: </span>{this.cardData?.scientificName}
                </div>
              ] : (this.cardData?.cardType === CardType.boost) ?
              // boost card case
              [] :
              // xeko card case
              [
                <div>
                  <span>Required Levels: </span>{(this.cardData) ? Array.from(this.cardData?.requiredLevels.values()).reduce((accu, level) => `${accu}${level}, `, '') : ''}
                </div>
              ]
          }
          <div>
            <span>Rules Text: </span>{this.cardData?.rulesText}
          </div>
          <div>
            <span>Flavor Text: </span>{this.cardData?.flavorText}
          </div>
        </div>
      </Host>
    );
  }

}
