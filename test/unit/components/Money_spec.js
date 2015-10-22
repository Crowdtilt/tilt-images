const React = require('react');
const Money = require('root/app/components/Money');
const {getTextContent} = require('../helpers/getTextContent');

describe('Money', function() {
  it('should render without error', function () {
    const text = getTextContent(<Money />);
    expect(text).to.equal('Money');
  });
});
