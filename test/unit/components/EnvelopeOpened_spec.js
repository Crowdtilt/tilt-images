const React = require('react');
const EnvelopeOpened = require('root/app/components/EnvelopeOpened');
const {getTextContent} = require('../helpers/getTextContent');

describe('EnvelopeOpened', function() {
  it('should render without error', function () {
    const text = getTextContent(<EnvelopeOpened />);
    expect(text).to.equal('EnvelopeOpened');
  });
});
