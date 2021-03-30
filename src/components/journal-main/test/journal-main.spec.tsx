import { newSpecPage } from '@stencil/core/testing';
import { JournalMain } from '../journal-main';

describe('journal-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JournalMain],
      html: `<journal-main></journal-main>`,
    });
    expect(page.root).toEqualHtml(`
      <journal-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </journal-main>
    `);
  });
});
