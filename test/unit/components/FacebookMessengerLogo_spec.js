const React = require('react');
const FacebookMessengerLogo = require('root/app/components/FacebookMessengerLogo');
const {getTextContent} = require('../helpers/getTextContent');

describe('FacebookMessengerLogo', function() {
  it('should render without error', function () {
    const text = getTextContent(<FacebookMessengerLogo />);
    expect(text).to.equal('FacebookMessengerLogo');
  });
});
