const React = require('react');
const PlusCross = require('root/app/components/PlusCross');
const {getTextContent} = require('../helpers/getTextContent');

describe('PlusCross', function() {
  it('should render without error', function () {
    const text = getTextContent(<PlusCross />);
    expect(text).to.equal('PlusCross');
  });
});
