const run = require('./../../core/engine');

run('http://site.celesc.com.br/licitacao/lista/E', $ => {

    const cheerioTableparser = require('cheerio-tableparser');
    cheerioTableparser($);

    const columns = $('#example').parsetable(false, false, true);
    return columns[0].map((col, i) => columns.map(row => row[i]));

});