import { Component, Host, h, State, Prop, Watch } from '@stencil/core';
import {state, onChange} from '../../store/store';
import { dataMap, madagascarCardData } from '../../utils/apimock';
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


@Component({
  tag: 'journal-page',
  styleUrl: 'journal-page.css',
  shadow: true,
})
export class JournalPage {

  // selected from url
  @Prop() selected: string = '';
  @Watch('selected')
  onSelectedChange() {
    state.selected = this.selected;
    this.cardData = dataMap.get(this.selected);
    console.log('new carddata', this.cardData);
    console.log('selected', this.selected);
  }

  @State() addDisabled = false;
  @State() removeDisabled = true;
  // rely on api mock map
  @State() cardData: CardData;

  componentWillLoad() {
    onChange('selected', (val) => {
      this.checkButtonState();
      this.cardData = dataMap.get(val);
      console.log('new carddata', this.cardData);
    });
  }

  componentDidLoad() {
    if (this.selected !== '') {
      state.selected = this.selected;
      this.cardData = dataMap.get(this.selected);
      console.log('new carddata', this.cardData);
    }
    console.log('selected', this.selected);
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
    this.addDisabled = state.userDeck[state.selected] > 2 || Object.values(state.userDeck).reduce((accu, cardCount) => accu + cardCount, 0) >= 40;
    this.removeDisabled = !state.userDeck[state.selected] || state.userDeck[state.selected] < 1;
  }

  render() {
    console.log('selected', this.selected)
    return (
      <Host>
          {
            (this.selected == '' || !this.selected) ?
              <div>Click on a card to learn more about it!</div> :
              [
                <div id='deck'>
                  <span>You have {(!!state.userDeck[state.selected]) ? state.userDeck[state.selected] : 0} in your deck.</span>
                  <button disabled={this.addDisabled} onClick={this.addToDeck}>Add to Deck</button>
                  <button disabled={this.removeDisabled} onClick={this.removeFromDeck}>Remove from Deck</button>
                </div>,
                <div id='flex-wrapper'>
                  <div id='content'>
                    <h2 class='name'>
                      {this.cardData?.name}
                    </h2>
                    {
                      // (this.cardData?.cardType === CardType.species) ?
                      //   <h4 class='scientific-name'>
                      //     {this.cardData.scientificName}
                      //   </h4> : null
                    }
                    <info-article cardData={this.cardData}></info-article>
                  </div>
                </div>
              ]
          }
          {/* TODO: make a request to some db for card data, might just hardcode for now */}
      </Host>
    );
  }

}
