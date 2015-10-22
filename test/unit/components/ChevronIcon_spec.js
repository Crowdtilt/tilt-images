const React = require('react');
const ChevronIcon = require('root/app/components/ChevronIcon');
const {getTextContent} = require('../helpers/getTextContent');

describe('ChevronIcon', function() {
  it('should render without error', function () {
    const text = getTextContent(<ChevronIcon />);
    expect(text).to.equal('Chevron');
  });
});
