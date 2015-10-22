const React = require('react');
const Platforms = require('root/app/components/Platforms');
const {getTextContent} = require('../helpers/getTextContent');

describe('Platforms', function() {
  it('should render without error', function () {
    const text = getTextContent(<Platforms />);
    expect(text).to.equal('Platforms');
  });
});
