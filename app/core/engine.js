const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const path = require('path');

const write = require('./writer');

const run = async (url, cbk) => {

    /* START BROWSER */
    const browser = await puppeteer.launch({headless: true});

    /* START PAGE */
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(url);

    /* SCREENSHOT */
    // await page.pdf({path: `${process.argv[1]}.pdf`});

    /* EXTRACT DATA */
    const rows = cbk(cheerio.load(await page.content()));

    /* WRITE DATA */
    write(rows);

    /* END BROWSER */
    browser.close();
};

module.exports = run;