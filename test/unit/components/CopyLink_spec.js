const React = require('react');
const CopyLink = require('root/app/components/CopyLink');
const {getTextContent} = require('../helpers/getTextContent');

describe('CopyLink', function() {
  it('should render without error', function () {
    const text = getTextContent(<CopyLink />);
    expect(text).to.equal('CopyLink');
  });
});
