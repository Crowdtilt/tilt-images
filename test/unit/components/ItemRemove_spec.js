const React = require('react');
const ItemRemove = require('root/app/components/ItemRemove');
const {getTextContent} = require('../helpers/getTextContent');

describe('ItemRemove', function() {
  it('should render without error', function () {
    const text = getTextContent(<ItemRemove />);
    expect(text).to.equal('ItemRemove');
  });
});
