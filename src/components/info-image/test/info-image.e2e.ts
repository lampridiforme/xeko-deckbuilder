import { newE2EPage } from '@stencil/core/testing';

describe('info-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<info-image></info-image>');

    const element = await page.find('info-image');
    expect(element).toHaveClass('hydrated');
  });
});
