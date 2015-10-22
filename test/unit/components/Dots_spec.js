const React = require('react');
const Dots = require('root/app/components/Dots');
const {getTextContent} = require('../helpers/getTextContent');

describe('Dots', function() {
  it('should render without error', function () {
    const text = getTextContent(<Dots />);
    expect(text).to.equal('Dots');
  });
});
