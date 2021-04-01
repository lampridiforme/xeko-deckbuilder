import { newSpecPage } from '@stencil/core/testing';
import { InfoArticle } from '../info-article';

describe('info-article', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InfoArticle],
      html: `<info-article></info-article>`,
    });
    expect(page.root).toEqualHtml(`
      <info-article>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </info-article>
    `);
  });
});
