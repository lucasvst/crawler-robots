const request = require('request');

const write = config => data => {

    const options = {
        headers: {
            'Content-Type' : 'application/json'
        },
        url: `${config.hostname}:${config.port}${config.path}`,
        json: data
    };

    request.post(options, (err, res, body) => {

        if(err) { console.log(err); }

    });
}

module.exports = write;