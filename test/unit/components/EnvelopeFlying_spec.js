const React = require('react');
const EnvelopeFlying = require('root/app/components/EnvelopeFlying');
const {getTextContent} = require('../helpers/getTextContent');

describe('EnvelopeFlying', function() {
  it('should render without error', function () {
    const text = getTextContent(<EnvelopeFlying />);
    expect(text).to.equal('EnvelopeFlying');
  });
});
