var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './index.js',
  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aout.js'
  },

  module: {
    rules: [
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './postcss.config.js'
                },
              },
            },
          ]
        })
      }
    ]
  },
  plugins: [ new ExtractTextPlugin('style.css') ],
};
