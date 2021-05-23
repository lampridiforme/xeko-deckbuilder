import { newSpecPage } from '@stencil/core/testing';
import { BorderedImage } from '../bordered-image';

describe('bordered-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BorderedImage],
      html: `<bordered-image></bordered-image>`,
    });
    expect(page.root).toEqualHtml(`
      <bordered-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bordered-image>
    `);
  });
});
