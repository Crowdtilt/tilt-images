var exports = {};
var include = function(componentName) {
    exports[componentName] = require("./components/" + componentName);
};

include('ChevronDownIcon');
include('Clipboard');
include('EnvelopeOpened');
include('Gift');
include('OneLeft');
include('Options');
include('PaperAirplaneImage');
include('PermissionEmailEnvelope');
include('PermissionFriends');
include('TiltLogoImage');
include('TiltLogoTextImage');
include('Triangle');
include('UsersTwo');

module.exports = exports;
