const path = require('path');

const fileWalker = require('./file-walker');
const fileRunner = require('./file-runner');

const FILE_PATTERN = /\.js$/;

const caller = _ => {

    const robotsPath = path.join(__dirname, '..', 'robots');

    fileWalker(robotsPath, (err, files) => {

        if(err) { throw err; }

        files.forEach(file => {

            if (!FILE_PATTERN.test(file)) {
                return;
            }

            fileRunner(file, (err) => {

                if (err) { throw err; }

                console.log('finished running ' + file);
            });
        });

    });
};

module.exports = caller;