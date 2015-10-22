const React = require('react');
const SellOptions = require('root/app/components/SellOptions');
const {getTextContent} = require('../helpers/getTextContent');

describe('SellOptions', function() {
  it('should render without error', function () {
    const text = getTextContent(<SellOptions />);
    expect(text).to.equal('SellOptions');
  });
});
