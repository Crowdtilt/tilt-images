var exports = {};
var include = function(componentName) {
    exports[componentName] = require("./components/" + componentName);
};

include("TiltLogoImage");
include("TiltLogoTextImage");
module.exports = exports;
