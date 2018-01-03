const run = require('./../../core/engine');

run('http://www.rionegrinho.sc.gov.br/licitacao', $ => {

    const rows = [];

    const items = $('ul#bidding_list li');

    items.each((i, item) => {

        rows.push({
            title: $('.bidding_title', item).text(),
            opening: $('.bidding_opening', item).text(),
            object: $('.bidding_object', item).text(),
        });
    });

    return rows;

});