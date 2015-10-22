const React = require('react');
const TagFriendSolid = require('root/app/components/TagFriendSolid');
const {getTextContent} = require('../helpers/getTextContent');

describe('TagFriendSolid', function() {
  it('should render without error', function () {
    const text = getTextContent(<TagFriendSolid />);
    expect(text).to.equal('TagFriendSolid');
  });
});
