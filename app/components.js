const components = [
  'AnonymousUser',
  'CopyLink',
  'Gift',
  'LuggageCart',
  'Platforms',
  'Triangle',
  'Audience',
  'Delete',
  'GmailLogo',
  'MembersSolid',
  'PlusCross',
  'TwitterLogo',
  'Camera',
  'Dots',
  'Group',
  'Money',
  'SellOptions',
  'UsersTwo',
  'Cards',
  'Duplicate',
  'GroupCircled',
  'OneLeft',
  'Tickets',
  'Star',
  'WhatsAppLogo',
  'Checkmark',
  'EnvelopeFlying',
  'GroupSolid',
  'Options',
  'TagFriend',
  'ChevronIcon',
  'EnvelopeOpened',
  'ItemAdd',
  'PaperAirplaneImage',
  'TagFriendSolid',
  'Clipboard',
  'FacebookLogo',
  'ItemRemove',
  'Pencil',
  'TiltLogo',
  'Clock',
  'FacebookMessengerLogo',
  'Lock',
  'PermissionEmailEnvelope',
  'TiltLogoOutline',
  'Close',
  'FilmStrip',
  'LockSolid',
  'PermissionFriends',
  'TiltLogoTextImage',
  'FullScreen',
  'Free',
  'ClockMinimal',
  'Heads',
  'SendMessageEnvelope',
  'FacebookVerified',
  'Refund',
  'PlusThin',
  'UserChecked',
  'MoneyStack',
  'CalendarRefresh',
  'ThumbUp',
  'ThumbDown',
  'FormattingBold',
  'FormattingBullets',
  'FormattingItalic',
  'FormattingNumbers',
  'FormattingUnderline',
  'TShirt',
  'Bullhorn',
  'UserGroup',
  'Bell',
  'BellAngled',
  'EnvelopeMoney',
];

module.exports = components.reduce(function(exports, componentName) {
  exports[componentName] = require(`./components/${componentName}`);
  return exports;
}, {});
