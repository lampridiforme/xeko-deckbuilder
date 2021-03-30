import { newE2EPage } from '@stencil/core/testing';

describe('journal-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<journal-main></journal-main>');

    const element = await page.find('journal-main');
    expect(element).toHaveClass('hydrated');
  });
});
