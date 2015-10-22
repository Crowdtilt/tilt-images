const React = require('react');
const TwitterLogo = require('root/app/components/TwitterLogo');
const {getTextContent} = require('../helpers/getTextContent');

describe('TwitterLogo', function() {
  it('should render without error', function () {
    const text = getTextContent(<TwitterLogo />);
    expect(text).to.equal('TwitterLogo');
  });
});
