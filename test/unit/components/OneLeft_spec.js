const React = require('react');
const OneLeft = require('root/app/components/OneLeft');
const {getTextContent} = require('../helpers/getTextContent');

describe('OneLeft', function() {
  it('should render without error', function () {
    const text = getTextContent(<OneLeft />);
    expect(text).to.equal('OneLeft1left');
  });
});
