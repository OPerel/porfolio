const puppeteer = require('puppeteer');
let browser, page;

const scrollToSection = async (linkId: string) => {
  await page.click(linkId);
  await page.waitFor(1300);
}

const isVisible = async (sectionId: string, bool: boolean) => {
  const section = await page.$(sectionId);
  const visible = await section.isIntersectingViewport();
  expect(visible).toBe(bool);
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

  test('should see Home section', async () => {
    await scrollToSection('#h');
    await isVisible('#Home', true);
  });

  test('should not see any other section', async () => {
    await isVisible('#About', false);
    await isVisible('#Portfolio', false);
    await isVisible('#Skills', false);
    await isVisible('#Contact', false);
  })

  test('should see welcome message in header', async () => {
    await page.waitForSelector('h1');
    const h = await page.$('h1');
    const text = await page.evaluate(h => h.textContent, h);
    expect(text).toEqual('Ori Perelman');
  });

  test('should not see About', async () => {
    await isVisible('#About', false);
  });

  test('should scroll to About section', async () => {
    await scrollToSection('#a');
    await isVisible('#About', true);
  });

  test('should not see Home after scrolling', async () => {
    await isVisible('#Home', false);
  });

  test('should scroll to Portfolio section', async () => {
    await scrollToSection('#p');
    await isVisible('#Portfolio', true);
  });

  test('should scroll to Skills section', async () => {
    await scrollToSection('#s');
    await isVisible('#Skills', true);
  });

  test('should not see portfolio section', async () => {
    await isVisible('#Portfolio', false);
  });

  // TODO
  test('should scroll to Contact footer', async () => {
    await scrollToSection('#c');
    await isVisible('#Contact', true);
  })

  test('should scroll back home', async () => {
    await scrollToSection('#h');
    await isVisible('#Home', true);
  });

  test('should not see any other section', async () => {
    await isVisible('#About', false);
    await isVisible('#Portfolio', false);
    await isVisible('#Skills', false);
    await isVisible('#Contact', false);
  });
});