import { Component, Host, h, State, Prop } from '@stencil/core';
import {state, onChange} from '../../store/store';
import { madagascarCardData } from '../../utils/apimock';
import { CardData, CardType, Pack, Rarity, SpeciesType } from '../info-article/info-definitions';

// const dataMap: Map<string, CardData> = new Map([
//   ['mm0', {
//     id: 'mm0', 
//     name: 'Ring Tail Lemur',
//     pack: Pack.madagascar,
//     number: 1,
//     rarity: Rarity.endangered,
//     cardType: CardType.species,

//     speciesType: SpeciesType.mammal,
//     scientificName: 'Something something',
//     borders: {
//       top: new Set([]),
//       bottom: new Set([]),
//       left: new Set([]),
//       right: new Set([])
//     },
//     energy: 10,
//     points: 7,
//     level: 3,
//     rulesText: 'Rules text!',
//     flavorText: 'Flavor text!',
//     requiredLevels: null
//   }]
// ]);

const dataMap: Map<string, CardData> = new Map(madagascarCardData.map(entry => [entry.id, entry]));

@Component({
  tag: 'journal-page',
  styleUrl: 'journal-page.css',
  shadow: true,
})
export class JournalPage {

  @State() addDisabled = false;
  @State() removeDisabled = true;
  // rely on api mock map
  @State() cardData: CardData;

  componentWillLoad() {
    onChange('selected', (val) => {
      this.checkButtonState();
      this.cardData = dataMap.get(val);
    });
  }

  private addToDeck = () => {
    const deckEntry = state.userDeck[state.selected];
    state.userDeck[state.selected] = (deckEntry !== 0 && !deckEntry) ? 1 : deckEntry + 1;
    state.userDeck = {...state.userDeck};
    this.checkButtonState();
  }

  private removeFromDeck = () => {
    state.userDeck[state.selected] = state.userDeck[state.selected] - 1;
    state.userDeck = {...state.userDeck};
    this.checkButtonState();
  };

  private checkButtonState() {
    this.addDisabled = state.userDeck[state.selected] > 2;
    this.removeDisabled = !state.userDeck[state.selected] || state.userDeck[state.selected] < 1;
  }

  render() {
    return (
      <Host>
        {
          (state.selected === '') ?
            <div>Click on a card to learn more about it!</div> :
            <div>
              <h2 class='name'>
                {/* {state.selected} */}
                {this.cardData?.name}
              </h2>
              {
                (this.cardData?.cardType === CardType.species) ?
                  <h4 class='scientific-name'>
                    {this.cardData.scientificName}
                  </h4> : null
              }
              <div>
                <span>You have {(!!state.userDeck[state.selected]) ? state.userDeck[state.selected] : 0} in your deck.</span>
                <button disabled={this.addDisabled} onClick={this.addToDeck}>Add to Deck</button>
                <button disabled={this.removeDisabled} onClick={this.removeFromDeck}>Remove from Deck</button>
              </div>
              <info-article cardData={this.cardData}></info-article>
            </div>
        }
        {/* TODO: make a request to some db for card data, might just hardcode for now */}
      </Host>
    );
  }

}
