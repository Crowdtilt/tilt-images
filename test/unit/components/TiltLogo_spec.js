const React = require('react');
const TiltLogo = require('root/app/components/TiltLogo');
const {getTextContent} = require('../helpers/getTextContent');

describe('TiltLogo', function() {
  it('should render without error', function () {
    const text = getTextContent(<TiltLogo />);
    expect(text).to.equal('TiltLogo');
  });
});
