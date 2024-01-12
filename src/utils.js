const readlineSync = require('readline-sync');

function getInput(question) {
    return readlineSync.question(question);
}

module.exports = { getInput };

