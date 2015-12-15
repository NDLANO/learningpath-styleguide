module.exports = {
  use: [
    'postcss-import',
    'autoprefixer',
    'postcss-cssnext',
    'postcss-reporter'
  ],
  input: 'src/index.css',
  output: 'dist/style.css',
  'postcss-import': {
    glob: true
  }
};
