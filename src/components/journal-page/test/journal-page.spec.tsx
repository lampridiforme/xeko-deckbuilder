import { newSpecPage } from '@stencil/core/testing';
import { JournalPage } from '../journal-page';

describe('journal-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JournalPage],
      html: `<journal-page></journal-page>`,
    });
    expect(page.root).toEqualHtml(`
      <journal-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </journal-page>
    `);
  });
});
