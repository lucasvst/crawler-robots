const config = require('./../config/api');
const writer = require('./persistence/api')(config);

module.exports = writer;