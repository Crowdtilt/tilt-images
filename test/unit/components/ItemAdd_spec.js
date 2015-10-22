const React = require('react');
const ItemAdd = require('root/app/components/ItemAdd');
const {getTextContent} = require('../helpers/getTextContent');

describe('ItemAdd', function() {
  it('should render without error', function () {
    const text = getTextContent(<ItemAdd />);
    expect(text).to.equal('ItemAdd');
  });
});
