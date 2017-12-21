const argv = require('./argv');

module.exports = parseInt(argv.port || process.env.PORT || '4444', 10); // eslint-disable-line
