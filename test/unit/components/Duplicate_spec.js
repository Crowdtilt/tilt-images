const React = require('react');
const Duplicate = require('root/app/components/Duplicate');
const {getTextContent} = require('../helpers/getTextContent');

describe('Duplicate', function() {
  it('should render without error', function () {
    const text = getTextContent(<Duplicate />);
    expect(text).to.equal('Duplicate');
  });
});
