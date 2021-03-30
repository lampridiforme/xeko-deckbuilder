import { Component, Host, h, State } from '@stencil/core';
import {state, onChange} from '../../store/store';


@Component({
  tag: 'journal-page',
  styleUrl: 'journal-page.css',
  shadow: true,
})
export class JournalPage {

  @State() addDisabled = false;
  @State() removeDisabled = true;

  componentWillLoad() {
    onChange('selected', (val) => {
      console.log('selected changed');
      this.checkButtonState();
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
    this.addDisabled = state.userDeck[state.selected] > 3;
    this.removeDisabled = !state.userDeck[state.selected] || state.userDeck[state.selected] < 2;
  }

  render() {
    return (
      <Host>
        {
          (state.selected === '') ?
            <div>Click on a card to learn more about it!</div> :
            <div>
              <div class='name'>
                {state.selected}
              </div>
              <div>
                <button disabled={this.addDisabled} onClick={this.addToDeck}>Add to Deck</button>
                <button disabled={this.removeDisabled} onClick={this.removeFromDeck}>Remove from Deck</button>
              </div>
              <div class='info'>
                <div>Actual info coming soon, I'll fill this out once I can query an API for info...</div>
              </div>
            </div>
        }
        {/* TODO: make a request to some db for card data, might just hardcode for now */}
      </Host>
    );
  }

}
