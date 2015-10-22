const React = require('react');
const Star = require('root/app/components/Star');
const {getTextContent} = require('../helpers/getTextContent');

describe('Star', function() {
  it('should render without error', function () {
    const text = getTextContent(<Star />);
    expect(text).to.equal('star');
  });
});
