import { newE2EPage } from '@stencil/core/testing';

describe('app-skills', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-skills></app-skills>');

    const element = await page.find('app-skills');
    expect(element).toHaveClass('hydrated');
  });
});
