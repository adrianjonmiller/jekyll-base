const Js = require('./javascript');
const Jekyll = require('./jekyll');
const browserSync = require('browser-sync');
const paths = require('./paths');
const env = process.env.NODE_ENV;

var js = new Js();
var jekyll = new Jekyll();

switch (env) {
  case 'production':    
      js.build().then(() => {
        jekyll.build();
      })
    break;
  
  case 'development':
      js.watch().then(() => {
        jekyll.watch().then(() => {
          var bs = browserSync.create();
      
          bs.init({
              server: paths.site,
              reloadDebounce: 500,
          });
      
          bs.watch(paths.site + '**/*').on('change', bs.reload);
        })
      })
    break;
}

