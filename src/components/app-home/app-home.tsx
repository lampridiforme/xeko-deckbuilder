import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <stencil-route-link url="/encyclopedia">
          <button>Encyclopedia</button>
        </stencil-route-link>

        <stencil-route-link url="/deck">
          <button>Deck</button>
        </stencil-route-link>
      </div>
    );
  }
}
