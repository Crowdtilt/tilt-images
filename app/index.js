var exports = {};
var include = function(componentName) {
    exports[componentName] = require("./components/" + componentName);
};

include("TiltLogoImage");
include("TiltLogoTextImage");
include("PaperAirplaneImage");
include("ChevronDownIcon");

module.exports = exports;
