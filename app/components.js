const components = require.context("./components", true, /^\.\/.*\.js$/)
  .keys()
  .map(function(keyName) {
    return keyName.split("/")[1].replace(/\.js$/, '');
  });

module.exports = components.reduce(function(exports, componentName) {
  exports[componentName] = require(`./components/${componentName}`);
  return exports;
}, {});
