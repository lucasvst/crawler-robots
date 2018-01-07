const fs = require('fs');

const write = data => {

    fs.writeFile(
        `${process.argv[1]}.json`,
        JSON.stringify(data, null, 2),
        err => console.log
    );
}

module.exports = write;