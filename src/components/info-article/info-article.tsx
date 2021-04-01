import { Component, Host, h, Prop } from '@stencil/core';
import { madagascarCardData } from '../../utils/apimock';
import { CardData, CardType, Pack, Rarity, SpeciesType } from './info-definitions';

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

@Component({
  tag: 'info-article',
  styleUrl: 'info-article.css',
  shadow: true,
})
export class InfoArticle {

  @Prop() imgSrc = 'test.png';
  @Prop() cardData: CardData;

  componentDidLoad() {
    console.log(madagascarCardData);
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
              <div class='left'></div>
              <div class='right'></div>
            </div>
            <div id='bottom-border' class='border'>
              <div class='left'></div>
              <div class='right'></div>
            </div>
            <div id='left-border' class='border'>
              <div class='top'></div>
              <div class='bottom'></div>
            </div>
            <div id='right-border' class='border'>
              <div class='top'></div>
              <div class='bottom'></div>
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
            (this.cardData.cardType === CardType.species) ?
              [
                <div>
                  <span>Level: </span>{this.cardData.level}
                </div>,
                <div>
                  <span>Species Type: </span>{this.cardData?.speciesType ? speciesTypeToString.get(this.cardData.speciesType) : ''}
                </div>,
                <div>
                  <span>Scientific Name: </span>{this.cardData?.scientificName}
                </div>
              ] : (this.cardData.cardType === CardType.boost) ?
              // boost card case
              [] :
              // xeko card case
              [
                <div>
                  <span>Required Levels: </span>{Array.from(this.cardData?.requiredLevels.values()).reduce((accu, level) => `${accu}${level}, `, '')}
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
