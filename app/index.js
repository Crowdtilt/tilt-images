var exports = {};
var include = function(componentName) {
    exports[componentName] = require('./components/' + componentName);
};

include('AnonymousUser');
include('Audience');
include('Camera');
include('Cards');
include('Checkmark');
include('ChevronIcon');
include('Clipboard');
include('EnvelopeOpened');
include('FacebookLogo');
include('FacebookMessengerLogo');
include('FilmStrip');
include('Gift');
include('GmailLogo');
include('Group');
include('Lock');
include('LuggageCart');
include('Money');
include('OneLeft');
include('Options');
include('PaperAirplaneImage');
include('PermissionEmailEnvelope');
include('PermissionFriends');
include('Platforms');
include('SellOptions');
include('Star');
include('TagFriend');
include('TiltLogo');
include('TiltLogoOutline');
include('TiltLogoTextImage');
include('Triangle');
include('TwitterLogo');
include('UsersTwo');

module.exports = exports;
