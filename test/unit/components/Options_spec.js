const React = require('react');
const Options = require('root/app/components/Options');
const {getTextContent} = require('../helpers/getTextContent');

describe('Options', function() {
  it('should render without error', function () {
    const text = getTextContent(<Options />);
    expect(text).to.equal('Options');
  });
});
