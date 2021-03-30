import { newE2EPage } from '@stencil/core/testing';

describe('journal-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<journal-page></journal-page>');

    const element = await page.find('journal-page');
    expect(element).toHaveClass('hydrated');
  });
});
