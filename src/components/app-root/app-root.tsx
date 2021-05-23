import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  @State() pinned: boolean = true;

  render() {
    return (
      <div>
        {/* <header>
          <h1>Stencil App Starter</h1>
        </header> */}

        <div id='toolbar'>
          <stencil-route-link url="/encyclopedia">
            <button>Encyclopedia</button>
          </stencil-route-link>

          <stencil-route-link url="/deck">
            <button>Deck</button>
          </stencil-route-link>
        </div>

        {/* <button onClick={() => this.pinned = !this.pinned}>pin</button> */}

        <div id='content'>
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
      </div>
    );
  }
}
