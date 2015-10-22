const React = require('react');
const TagFriend = require('root/app/components/TagFriend');
const {getTextContent} = require('../helpers/getTextContent');

describe('TagFriend', function() {
  it('should render without error', function () {
    const text = getTextContent(<TagFriend />);
    expect(text).to.equal('TagFriend');
  });
});
