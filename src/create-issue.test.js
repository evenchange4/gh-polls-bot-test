require('dotenv').config();
const puppeteer = require('puppeteer');
const delay = require('delay');

const { ACCOUNT, PASSWORD } = process.env;

describe('Create a issue', () => {
  let browser = puppeteer.launch({
    // headless: false,
    // slowMo: 20,
    noSandbox: true,
  });
  let page;

  beforeAll(async () => {
    browser = await browser;
    page = await browser.newPage();
    // await page.setViewport({ width: 1200, height: 800 });
  });

  afterAll(() => {
    browser.close();
  });

  it(
    'should render 3 img tags',
    async () => {
      // Login
      await page.goto('https://github.com/login');
      await page.type('input#login_field', ACCOUNT);
      await page.type('input#password', PASSWORD);
      await page.click(
        '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block',
      );
      await page.waitForSelector('#your_repos');

      // Create Issue
      await page.goto(
        'https://github.com/evenchange5/gh-polls-bot-test/issues/new',
      );
      await page.type('input#issue_title', 'Puppeteer test fail');
      await page.type(
        'textarea#issue_body',
        `/polls Option1 'Option 2' "Option 3"`,
      );
      await page.click(
        '#new_issue > div.new-issue-form > div.discussion-timeline > div > div > div.form-actions > button',
      );
      await page.waitForNavigation();

      // Assert
      let imagesLength = 0;
      async function retry() {
        try {
          imagesLength = await page.$$eval(
            'table > tbody img',
            images => images.length,
          );

          if (imagesLength !== 3) {
            throw new Error('Retry fail, next try');
          }
        } catch (error) {
          console.log(error); // eslint-disable-line
          await delay(1000);
          await page.reload();
          await retry();
        }
      }

      await retry();
      expect(imagesLength).toBe(3);

      const labelTitle = await page.$eval(
        '.discussion-item-header span.IssueLabel.d-inline-block.v-align-middle',
        el => el.title,
      );
      expect(labelTitle).toBe('Polls');

      // Close issue
      await page.click('button[name=comment_and_close]');
      console.log(page.url()); // eslint-disable-line
    },
    26000,
  );
});
