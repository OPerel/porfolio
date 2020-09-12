import { newE2EPage } from '@stencil/core/testing';

describe('section-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<section-container></section-container>');

    const element = await page.find('section-container');
    expect(element).toHaveClass('hydrated');
  });
});
