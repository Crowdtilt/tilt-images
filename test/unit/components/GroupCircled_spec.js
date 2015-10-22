const React = require('react');
const GroupCircled = require('root/app/components/GroupCircled');
const {getTextContent} = require('../helpers/getTextContent');

describe('GroupCircled', function() {
  it('should render without error', function () {
    const text = getTextContent(<GroupCircled />);
    expect(text).to.equal('GroupCircled');
  });
});
