import { newSpecPage } from '@stencil/core/testing';
import { DeckViewer } from '../deck-viewer';

describe('deck-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DeckViewer],
      html: `<deck-viewer></deck-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <deck-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </deck-viewer>
    `);
  });
});
