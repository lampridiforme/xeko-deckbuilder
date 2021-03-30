import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'journal-main',
  styleUrl: 'journal-main.css',
  shadow: true,
})
export class JournalMain {

  private navInfo = [
    {
      deck: 'Madagascar',
      cards: [
        'Ring Tailed Lemur',
        'Fire Elemental',
        'Fossa'
      ]
    },
    {
      deck: 'Costa Rica',
      cards: [
        'Blue Morpho Butterfly'
      ]
    }
  ];

  render() {
    return (
      <Host>
        <journal-navigator navInfo={this.navInfo}></journal-navigator>
        <journal-page></journal-page>
      </Host>
    );
  }

}
