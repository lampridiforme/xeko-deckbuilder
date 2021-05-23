import { Component, Host, h, State } from '@stencil/core';
import { state, onChange } from '../../store/store';
import { dataMap, madagascarCardData } from '../../utils/apimock';
import { CardData } from '../info-article/info-definitions';

@Component({
  tag: 'deck-viewer',
  styleUrl: 'deck-viewer.css',
  shadow: true,
})
export class DeckViewer {

  @State() userDeck = [];

  componentWillLoad() {
    onChange('userDeck', (val) => {
      console.log('deckchanged');
      this.userDeck = Object.entries(val);
    });
  }

  componentDidLoad() {
    console.log(state.userDeck);
    this.userDeck = Object.entries(state.userDeck);
  }

  render() {
    return (
      <Host>
        {
          this.userDeck.map(([id, count]) => (count > 0) ?
            <div>
              <span>{dataMap.get(id)?.name}: {count}</span>
              <button onClick={() => state.userDeck = {...state.userDeck, [id]: count - 1}}>Remove 1</button>
              <button disabled={count > 2} onClick={() => state.userDeck = {...state.userDeck, [id]: count + 1}}>Add 1</button>
              <stencil-route-link url={'/encyclopedia/' + id}>
                <button>Go to Entry</button>
              </stencil-route-link>
            </div> : null
          )
        }
      </Host>
    );
  }

}
