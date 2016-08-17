var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcss = require('postcss');
var postcssImport = require('postcss-easy-import');
var cssNext = require('postcss-cssnext');
var postcssReporter = require('postcss-reporter');
var pkginfo = require('pkginfo');


var pkgInfoPlugin = postcss.plugin('pkginfo', function () {
  var pkg = pkginfo.read(module).package;
  var pkgKeys = Object.keys(pkg).filter(function (k) { return typeof pkg[k] === 'string'; });

  return function (css) {
    css.walkComments(function (comment) {
      if (/^!/.test(comment.text)) {
        comment.text = pkgKeys.reduce(
            function reducer (str, key) { return str.replace('pkg.'+key, pkg[key]); },
            comment.text);
      }
    });
  };
});


module.exports = {
  entry: './index.js',
  target: 'web',

  output: {
    path: './dist',
    filename: 'aout.js'
  },

  module: {
    loaders: [
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  },

  plugins: [ new ExtractTextPlugin('style.css') ],

  postcss: function () {
    return [
      postcssImport({
        glob: true,
        addDependencyTo: this
      }),
      cssNext,
      pkgInfoPlugin,
      postcssReporter({ clearMessages: true })
    ];
  }
};
