const React = require('react');
const LuggageCart = require('root/app/components/LuggageCart');
const {getTextContent} = require('../helpers/getTextContent');

describe('LuggageCart', function() {
  it('should render without error', function () {
    const text = getTextContent(<LuggageCart />);
    expect(text).to.equal('LuggageCart');
  });
});
