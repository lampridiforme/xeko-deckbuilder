import { newSpecPage } from '@stencil/core/testing';
import { InfoImage } from '../info-image';

describe('info-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InfoImage],
      html: `<info-image></info-image>`,
    });
    expect(page.root).toEqualHtml(`
      <info-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </info-image>
    `);
  });
});
