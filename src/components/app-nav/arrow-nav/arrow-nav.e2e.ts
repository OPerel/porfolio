import { newE2EPage } from '@stencil/core/testing';

describe('arrow-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arrow-nav></arrow-nav>');

    const element = await page.find('arrow-nav');
    expect(element).toHaveClass('hydrated');
  });
});
