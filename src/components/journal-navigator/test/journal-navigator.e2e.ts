import { newE2EPage } from '@stencil/core/testing';

describe('journal-navigator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<journal-navigator></journal-navigator>');

    const element = await page.find('journal-navigator');
    expect(element).toHaveClass('hydrated');
  });
});
