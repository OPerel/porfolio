import { newE2EPage } from '@stencil/core/testing';

describe('section-about', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<section-about></section-about>');

    const element = await page.find('section-about');
    expect(element).toHaveClass('hydrated');
  });
});
