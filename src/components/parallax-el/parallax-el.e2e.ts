import { newE2EPage } from '@stencil/core/testing';

describe('parallx-el', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<parallx-el></parallx-el>');

    const element = await page.find('parallx-el');
    expect(element).toHaveClass('hydrated');
  });
});
