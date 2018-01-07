const Schema = require('./../../core/persistence/schema');

const run = require('./../../core/engine');

const AGENCY_NAME = 'CELESC LISTA E';

run('http://site.celesc.com.br/licitacao/lista/E', $ => {

    const rows = [];

    const items = $('table#example tbody tr');

    items.each((i, item) => {

        rows.push(new Schema({
            number: $('td:nth-child(1)', item).text(),
            modality: $('td:nth-child(2)', item).text(),
            agency: AGENCY_NAME,
            object_description: $('td:nth-child(4)', item).text(),
            starts_in_raw: $('td:nth-child(5)', item).text(),
            // edital: $('td:nth-child(1)', item).text(),
        }));
    });

    return rows;

});