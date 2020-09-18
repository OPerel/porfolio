import { newE2EPage } from '@stencil/core/testing';

describe('contact-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<contact-footer></contact-footer>');

    const element = await page.find('contact-footer');
    expect(element).toHaveClass('hydrated');
  });
});
