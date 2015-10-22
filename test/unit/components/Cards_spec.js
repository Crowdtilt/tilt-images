const React = require('react');
const Cards = require('root/app/components/Cards');
const {getTextContent} = require('../helpers/getTextContent');

describe('Cards', function() {
  it('should render without error', function () {
    const text = getTextContent(<Cards />);
    expect(text).to.equal('Cards');
  });
});
