var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var cssNext = require('postcss-cssnext');
var postcssReporter = require('postcss-reporter');

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
      autoprefixer,
      cssNext,
      postcssReporter
    ];
  }
};
