const React = require('react');
const UsersTwo = require('root/app/components/UsersTwo');
const {getTextContent} = require('../helpers/getTextContent');

describe('UsersTwo', function() {
  it('should render without error', function () {
    const text = getTextContent(<UsersTwo />);
    expect(text).to.equal('UsersTwo');
  });
});
