import { newE2EPage } from '@stencil/core/testing';

describe('growing-tri', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<growing-tri></growing-tri>');

    const element = await page.find('growing-tri');
    expect(element).toHaveClass('hydrated');
  });
});
