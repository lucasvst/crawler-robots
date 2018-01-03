const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const path = require('path');

const writeData = data => {

    const fs = require('fs');

    fs.writeFile(
        `${path.basename(__filename)}.json`,
        JSON.stringify(data, null, 2),
        err => console.log
    );
}

const run = async (url, cbk) => {

    /* START BROWSER */
    const browser = await puppeteer.launch({headless: true});

    /* START PAGE */
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(url);

    /* SCREENSHOT */
    await page.pdf({path: `./${path.basename(__filename)}.pdf`});

    /* EXTRACT DATA */
    const rows = cbk(cheerio.load(await page.content()));

    /* WRITE DATA */
    writeData(rows);

    /* END BROWSER */
    browser.close();
};

module.exports = run;