import { newE2EPage } from '@stencil/core/testing';

describe('info-article', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<info-article></info-article>');

    const element = await page.find('info-article');
    expect(element).toHaveClass('hydrated');
  });
});
