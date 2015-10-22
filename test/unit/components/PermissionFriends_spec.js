const React = require('react');
const PermissionFriends = require('root/app/components/PermissionFriends');
const {getTextContent} = require('../helpers/getTextContent');

describe('PermissionFriends', function() {
  it('should render without error', function () {
    const text = getTextContent(<PermissionFriends />);
    expect(text).to.equal('PermissionFriends');
  });
});
