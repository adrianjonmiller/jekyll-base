var path = require('path');

const paths = {};
paths.root = path.join(__dirname, '../');
paths.src = path.join(paths.root, 'src');
paths.site = path.join(paths.root, '_site');
paths.js = path.join(paths.src, '_js');
paths.assets = path.join(paths.src, 'assets');
paths.assetsJs = path.join(paths.assets, 'js');

module.exports = paths;