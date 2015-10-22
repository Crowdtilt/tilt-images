const React = require('react');
const Lock = require('root/app/components/Lock');
const {getTextContent} = require('../helpers/getTextContent');

describe('Lock', function() {
  it('should render without error', function () {
    const text = getTextContent(<Lock />);
    expect(text).to.equal('Lock');
  });
});
