const browserify = require('browserify');
const fs = require('fs');
const files = require('./files');
const paths = require('./paths');
const watchify = require('watchify');

function Js () {

}

Js.prototype.watch = function () {
  return new Promise((resolve) => {

    var b = browserify({
      entries: [files.jsMain],
      cache: {},
      packageCache: {},
      transform: "babelify",
      plugin: [watchify]
    });
  
    b.bundle()
      .on('error', console.error)
      .pipe(fs.createWriteStream(files.jsBundle).on('close', () => {
          resolve();
      }));
  
    b.on('update', bundle);
  
    function bundle () {
      b.bundle()
        .on('error', console.error)
        .pipe(fs.createWriteStream(files.jsBundle).on('close', () => {
            console.log("Updated file")
        }));
    }


  }); 
}

Js.prototype.build = function () {
  return new Promise((resolve) => {

    var b = browserify({
      entries: [files.jsMain],
      cache: {},
      packageCache: {},
      transform: "babelify"
    });
  
    b.bundle()
      .on('error', console.error)
      .pipe(fs.createWriteStream(files.jsBundle).on('close', () => {
          resolve();
      }));
  }); 
}

module.exports = Js;