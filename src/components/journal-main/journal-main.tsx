import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import {state} from '../../store/store';
import { madagascarNavData } from '../../utils/apimock';

@Component({
  tag: 'journal-main',
  styleUrl: 'journal-main.css',
  shadow: true,
})
export class JournalMain {

  @Prop() match: MatchResults;

  componentDidLoad() {
    console.log('matched: ', this.match?.params?.entry);
  }

  // private navInfo = [
  //   {
  //     deck: 'Madagascar',
  //     cards: [
  //       {name: 'Ring Tailed Lemur', id: 'mm0'},
  //       // {name: 'Fire Elemental', id: 'mm1'}
  //     ]
  //   },
  //   {
  //     deck: 'Costa Rica',
  //     cards: [
  //       // {name: 'Blue Morpho Butterfly', id: 'cr0'}
  //     ]
  //   }
  // ];

  private navInfo = [madagascarNavData];

  render() {
    return (
      <Host>
        <journal-navigator navInfo={this.navInfo}></journal-navigator>
        <journal-page selected={this.match?.params?.entry?.toUpperCase() || ''}></journal-page>
        
      </Host>
    );
  }

}
