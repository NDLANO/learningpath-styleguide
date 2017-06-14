var postcss = require('postcss');
var pkginfo = require('pkginfo')(module);

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

module.exports = function() {
  return {
    plugins: [
      require('postcss-easy-import')({ glob: true }),
      require('stylelint')(),
      require('postcss-cssnext')({
        browsers: ['last 2 versions', '> 5%'],
      }),
      pkgInfoPlugin,
      require('postcss-reporter')({ clearMessages: true }),
    ]
  };
};