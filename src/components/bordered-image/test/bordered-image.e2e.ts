import { newE2EPage } from '@stencil/core/testing';

describe('bordered-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bordered-image></bordered-image>');

    const element = await page.find('bordered-image');
    expect(element).toHaveClass('hydrated');
  });
});
