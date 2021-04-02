import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        {/* <header>
          <h1>Stencil App Starter</h1>
        </header> */}

        <div>
          <stencil-route-link url="/encyclopedia">
            <button>Encyclopedia</button>
          </stencil-route-link>

          <stencil-route-link url="/deck">
            <button>Deck</button>
          </stencil-route-link>
        </div>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/encyclopedia/:entry" component="journal-main" />
              <stencil-route url="/encyclopedia" component="journal-main" />
              <stencil-route url="/deck" component="deck-viewer" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
