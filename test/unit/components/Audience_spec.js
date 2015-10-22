const React = require('react');
const Audience = require('root/app/components/Audience');
const {getTextContent} = require('../helpers/getTextContent');

describe('Audience', function() {
  it('should render without error', function () {
    const text = getTextContent(<Audience />);
    expect(text).to.equal('Audience');
  });
});
