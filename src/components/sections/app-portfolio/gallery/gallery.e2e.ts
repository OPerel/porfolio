import { newE2EPage } from '@stencil/core/testing';

describe('projects-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<projects-gallery></projects-gallery>');

    const element = await page.find('projects-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
