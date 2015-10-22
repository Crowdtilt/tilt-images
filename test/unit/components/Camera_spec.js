const React = require('react');
const Camera = require('root/app/components/Camera');
const {getTextContent} = require('../helpers/getTextContent');

describe('Camera', function() {
  it('should render without error', function () {
    const text = getTextContent(<Camera />);
    expect(text).to.equal('camera');
  });
});
