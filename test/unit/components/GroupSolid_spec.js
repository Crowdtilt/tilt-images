const React = require('react');
const GroupSolid = require('root/app/components/GroupSolid');
const {getTextContent} = require('../helpers/getTextContent');

describe('GroupSolid', function() {
  it('should render without error', function () {
    const text = getTextContent(<GroupSolid />);
    expect(text).to.equal('GroupSolid icon');
  });
});
