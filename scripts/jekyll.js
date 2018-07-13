const paths = require('./paths');
const files = require('./files');
const child = require('child_process');

function Jekyll () {

}

Jekyll.prototype.watch = function (cb) {
  return new Promise((resolve) => {
    var jekyll = child.spawn('bundle',
      [ 'exec',
        'jekyll',
        'build',
        '--destination',
        paths.site,
        '--config', 
        files.configBase + ',' + files.configDev,
        '--watch'
      ],
      {
        cwd: paths.base
      }
    );

    const jekyllLogger = (buffer) => {
      buffer.toString()
        .split(/\n/)
        .forEach((message) => console.log('Jekyll: ' + message));
    };
  
    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);

    resolve()
  })
}

Jekyll.prototype.build = function (cb) {
  var jekyll = child.spawn('bundle',
      [ 'exec',
        'jekyll',
        'build',
        '--config', 
        files.configBase + ',' + files.configProd,
        '--destination',
        paths.site,
      ],
      {
        cwd: paths.base,
        stdio: 'inherit'
      }
    );
        
    return jekyll;
}

module.exports = Jekyll;
