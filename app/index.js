var exports = {};
var include = function(componentName) {
    exports[componentName] = require("./components/" + componentName);
};

include("TiltLogoImage");
include("TiltLogoTextImage");
include("PaperAirplaneImage");
include("Triangle");
include("ChevronDownIcon");
include("Clipboard");
include('Options');
include('OneLeft');
include('UsersTwo');
include('EnvelopeOpened');
include('Gift');

module.exports = exports;
