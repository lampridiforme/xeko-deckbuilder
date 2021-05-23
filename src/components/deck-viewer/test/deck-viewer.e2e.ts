import { newE2EPage } from '@stencil/core/testing';

describe('deck-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<deck-viewer></deck-viewer>');

    const element = await page.find('deck-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
