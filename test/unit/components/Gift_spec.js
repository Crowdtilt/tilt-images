const React = require('react');
const Gift = require('root/app/components/Gift');
const {getTextContent} = require('../helpers/getTextContent');

describe('Gift', function() {
  it('should render without error', function () {
    const text = getTextContent(<Gift />);
    expect(text).to.equal('Gift');
  });
});
