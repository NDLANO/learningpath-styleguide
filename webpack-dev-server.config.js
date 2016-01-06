var config = module.exports = require('./webpack.config');

config.output.path = './public';
config.devServer = { contentBase: './public' };
