const React = require('react');
const TiltLogoOutline = require('root/app/components/TiltLogoOutline');
const {getTextContent} = require('../helpers/getTextContent');

describe('TiltLogoOutline', function() {
  it('should render without error', function () {
    const text = getTextContent(<TiltLogoOutline />);
    expect(text).to.equal('TiltLogoOutline');
  });
});
