const React = require('react');
const GmailLogo = require('root/app/components/GmailLogo');
const {getTextContent} = require('../helpers/getTextContent');

describe('GmailLogo', function() {
  it('should render without error', function () {
    const text = getTextContent(<GmailLogo />);
    expect(text).to.equal('GmailLogo');
  });
});
