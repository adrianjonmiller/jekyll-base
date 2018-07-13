const path = require('path');
const paths = require('./paths')

const files = {};
files.jsMain = path.join(paths.js, 'main.js');
files.jsBundle = path.join(paths.assetsJs, 'bundle.js');
files.configBase = path.join(paths.root, '_config.yml');
files.configDev = path.join(paths.root, '_config.dev.yml');
files.configProd = path.join(paths.root, '_config.prod.yml');

module.exports = files;