var exports = {};
var include = function(componentName) {
    exports[componentName] = require('./components/' + componentName);
};

include('Camera');
include('Cards');
include('Checkmark');
include('ChevronIcon');
include('Clipboard');
include('EnvelopeOpened');
include('FilmStrip');
include('Gift');
include('Group');
include('Lock');
include('OneLeft');
include('Options');
include('PaperAirplaneImage');
include('PermissionEmailEnvelope');
include('PermissionFriends');
include('Star');
include('TagFriend');
include('TiltLogo');
include('TiltLogoTextImage');
include('Triangle');
include('UsersTwo');

module.exports = exports;
