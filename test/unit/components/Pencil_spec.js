const React = require('react');
const Pencil = require('root/app/components/Pencil');
const {getTextContent} = require('../helpers/getTextContent');

describe('Pencil', function() {
  it('should render without error', function () {
    const text = getTextContent(<Pencil />);
    expect(text).to.equal('Pencil');
  });
});
