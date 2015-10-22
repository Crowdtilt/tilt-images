const React = require('react');
const FacebookLogo = require('root/app/components/FacebookLogo');
const {getTextContent} = require('../helpers/getTextContent');

describe('FacebookLogo', function() {
  it('should render without error', function () {
    const text = getTextContent(<FacebookLogo />);
    expect(text).to.equal('FacebookLogo');
  });
});
