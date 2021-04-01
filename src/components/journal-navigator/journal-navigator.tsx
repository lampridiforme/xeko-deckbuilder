import { Component, h, Prop } from '@stencil/core';
import { state } from '../../store/store';


export interface NavInfo {
  deck: string;
  cards: Array<{name: string, id: string}>;
}

@Component({
  tag: 'journal-navigator',
  styleUrl: 'journal-navigator.css',
  shadow: true,
})
export class JournalNavigator {

  @Prop() navInfo: Array<NavInfo>;

  render() {
    return (
      <nav>
        {
          this.navInfo.map(({deck, cards}: NavInfo) => {
            return [
              <div class='deck'>{deck}</div>,
              <div>
                {
                  cards.map(({name, id}: {name: string, id: string}) => {
                    return <div class='card' onClick={() => state.selected = id}>{name}</div>
                  })
                }
              </div>
            ]
          })
        }    
      </nav>
    );
  }

}
