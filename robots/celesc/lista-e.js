const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const path = require('path');

const TABLE_SELECTOR = '#example';
const SITE_URL = 'http://site.celesc.com.br/licitacao/lista/E';

const writeData = data => {

    const fs = require('fs');

    fs.writeFile(
        `${path.basename(__filename)}.json`,
        JSON.stringify(data, null, 2),
        err => console.log
    );
}

const extractData = $ => {

    const cheerioTableparser = require('cheerio-tableparser');
    cheerioTableparser($);

    const columns = $(TABLE_SELECTOR).parsetable(false, false, true);
    return columns[0].map((col, i) => columns.map(row => row[i]));
}

const result = async _ => {

    /* START BROWSER */
    const browser = await puppeteer.launch({headless: true});

    /* START PAGE */
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(SITE_URL);

    /* SCREENSHOT */
    await page.pdf({path: `./${path.basename(__filename)}.pdf`});

    /* EXTRACT DATA */
    const rows = extractData(cheerio.load(await page.content()));

    /* WRITE DATA */
    writeData(rows);

    /* END BROWSER */
    browser.close();

    return rows;
};

result()
    .then(rows => console.log(rows))
    .catch(err => console.log(err.message))
;