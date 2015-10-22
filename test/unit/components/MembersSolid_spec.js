const React = require('react');
const MembersSolid = require('root/app/components/MembersSolid');
const {getTextContent} = require('../helpers/getTextContent');

describe('MembersSolid', function() {
  it('should render without error', function () {
    const text = getTextContent(<MembersSolid />);
    expect(text).to.equal('MembersSolid');
  });
});
