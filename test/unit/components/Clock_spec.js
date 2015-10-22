const React = require('react');
const Clock = require('root/app/components/Clock');
const {getTextContent} = require('../helpers/getTextContent');

describe('Clock', function() {
  it('should render without error', function () {
    const text = getTextContent(<Clock />);
    expect(text).to.equal('Clock');
  });
});
