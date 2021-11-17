const path = require('path');

module.exports = {
    entry: './sw.js',
    output: {
        filename: 'sw-bundle.js',
        path: path.resolve(__dirname),
    },
    mode: "production"
};
