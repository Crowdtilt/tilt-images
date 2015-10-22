const React = require('react');
const Close = require('root/app/components/Close');
const {getTextContent} = require('../helpers/getTextContent');

describe('Close', function() {
  it('should render without error', function () {
    const text = getTextContent(<Close />);
    expect(text).to.equal('Close');
  });
});
