const React = require('react');
const Delete = require('root/app/components/Delete');
const {getTextContent} = require('../helpers/getTextContent');

describe('Delete', function() {
  it('should render without error', function () {
    const text = getTextContent(<Delete />);
    expect(text).to.equal('Delete');
  });
});
