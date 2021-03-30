import { newSpecPage } from '@stencil/core/testing';
import { JournalNavigator } from '../journal-navigator';

describe('journal-navigator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JournalNavigator],
      html: `<journal-navigator></journal-navigator>`,
    });
    expect(page.root).toEqualHtml(`
      <journal-navigator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </journal-navigator>
    `);
  });
});
