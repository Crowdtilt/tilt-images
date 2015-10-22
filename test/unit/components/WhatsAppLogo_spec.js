const React = require('react');
const WhatsAppLogo = require('root/app/components/WhatsAppLogo');
const {getTextContent} = require('../helpers/getTextContent');

describe('WhatsAppLogo', function() {
  it('should render without error', function () {
    const text = getTextContent(<WhatsAppLogo />);
    expect(text).to.equal('WhatsAppLogo');
  });
});
