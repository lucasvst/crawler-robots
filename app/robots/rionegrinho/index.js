const Schema = require('./../../core/persistence/schema');

const run = require('./../../core/engine');

const AGENCY_NAME = 'PREFEITURA DE RIO NEGRINHO/SC';

const modalityNumberPattern = /^([A-zÀ-ÿ\s-]*)\sNº\s([\d\/]*)/i;
const startsInPattern = /^\w*:\s([\d/\s:-]*)/i;

const extractModality = str => {
    if (!str) { return; }
    const match = str.match(modalityNumberPattern);
    return match[1];
}

const extractNumber = str => {
    if (!str) { return; }
    const match = str.match(modalityNumberPattern);
    return match[2];
}

const extractObjectDescription = str => str;

const extractStartsInRaw = str => {
    if (!str) { return; }
    const match = str.match(startsInPattern);
    return match[1];
}

run('http://www.rionegrinho.sc.gov.br/licitacao', $ => {

    const rows = [];

    const items = $('ul#bidding_list li');

    items.each((i, item) => {

        const obj = {
            number: extractNumber($('.bidding_title', item).text()),
            modality: extractModality($('.bidding_title', item).text()),
            agency: AGENCY_NAME,
            object_description: extractObjectDescription($('bidding_object', item).text()),
            starts_in_raw: extractStartsInRaw($('.bidding_opening', item).text()),
            // edital: '',
        }

        rows.push(new Schema(obj));
    });

    return rows;

});