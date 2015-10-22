const React = require('react');
const Triangle = require('root/app/components/Triangle');
const {getTextContent} = require('../helpers/getTextContent');

describe('Triangle', function() {
  it('should render without error', function () {
    const text = getTextContent(<Triangle />);
    expect(text).to.equal('Triangle');
  });
});
