import { newE2EPage } from '@stencil/core/testing';

describe('project-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<project-card></project-card>');

    const element = await page.find('project-card');
    expect(element).toHaveClass('hydrated');
  });
});
