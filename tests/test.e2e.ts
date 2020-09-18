import puppeteer, { Browser, Page } from 'puppeteer';
let browser: Browser, page: Page;

const scrollToSection = async (linkId: string): Promise<void> => {
  await page.click(linkId);
  await page.waitFor(1800);
}

const isVisible = async (sectionTag: string, bool: boolean): Promise<void> => {
  const section = await page.$(sectionTag);
  const visible = await section.isIntersectingViewport();
  expect(visible).toBe(bool);
}

const getSectionTitle = async (sectionTag: string): Promise<string> => {
  return await page.$eval(`${sectionTag} h2`, title => title.textContent);
}

describe('scrolling through the page', () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3333');
  });

  afterAll(async () => {
    try { 
      await browser.close();
      console.log('testing session terminated!');
    } catch (err) {
      console.log('failed closing testing session: ', err);
    }
  });

  // Hero section
  test('should see Home section', async () => {
    await isVisible('app-home', true);
  });

  test('should not see any other section', async () => {
    await isVisible('app-about', false);
    await isVisible('app-portfolio', false);
    await isVisible('app-skills', false);
    await isVisible('contact-footer', false);
  })

  test('should see user name in header', async () => {
    await page.waitForSelector('h1');
    const h = await page.$('h1');
    const text = await page.evaluate(h => h.textContent, h);
    expect(text).toEqual('Ori Perelman');
  });

  test('should not see About', async () => {
    await isVisible('app-about', false);
  });

  test('should read "Welcome!" in main title', async () => {
    expect(await getSectionTitle('app-home')).toEqual('Welcome');
  })

  // About section
  test('should scroll to About section', async () => {
    await scrollToSection('#a');
    await isVisible('app-about', true);
  });

  test('should not see Home after scrolling', async () => {
    await isVisible('app-home', false);
  });

  test('should read about section title', async () => {
    expect(await getSectionTitle('app-about')).toEqual('About');
  });

  // Portfolio section
  test('should scroll to Portfolio section', async () => {
    await scrollToSection('#p');
    await isVisible('app-portfolio', true);
  });

  test('should read portfolio section title', async () => {
    expect(await getSectionTitle('app-portfolio')).toEqual('Portfolio');
  });

  // Skills  section
  test('should scroll to Skills section', async () => {
    await scrollToSection('#s');
    await isVisible('app-skills', true);
  });

  test('should not see portfolio section', async () => {
    await isVisible('app-portfolio', false);
  });

  test('should read skills section title', async () => {
    expect(await getSectionTitle('app-skills')).toEqual('Skills');
  });

  // Contact footer
  test('should scroll to Contact footer', async () => {
    await scrollToSection('#c');
    await isVisible('contact-footer', true);
  });

  test('should read contact section title', async () => {
    expect(await getSectionTitle('contact-footer')).toEqual('Contact Me!');
  });

  // back to top
  test('should scroll back home', async () => {
    await scrollToSection('#h');
    await isVisible('app-home', true);
  });

  test('should not see any other section', async () => {
    await isVisible('app-about', false);
    await isVisible('app-portfolio', false);
    await isVisible('app-skills', false);
    await isVisible('contact-footer', false);
  });
});