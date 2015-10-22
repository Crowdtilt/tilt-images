const React = require('react');
const Checkmark = require('root/app/components/Checkmark');
const {getTextContent} = require('../helpers/getTextContent');

describe('Checkmark', function() {
  it('should render without error', function () {
    const text = getTextContent(<Checkmark />);
    expect(text).to.equal('Checkmark');
  });
});
