import { Component, Host, h, Prop } from '@stencil/core';
import { state, onChange } from '../../store/store';

export interface NavInfo {
  deck: string;
  cards: Array<string>;
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
            return <div>
              <div class='deck'>{deck}</div>
              <div>
                {
                  cards.map((card: string) => {
                    return <div class='card' onClick={() => state.selected = card}>{card}</div>
                  })
                }
              </div>
            </div>
          })
        }        
      </nav>
    );
  }

}
