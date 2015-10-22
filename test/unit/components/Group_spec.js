const React = require('react');
const Group = require('root/app/components/Group');
const {getTextContent} = require('../helpers/getTextContent');

describe('Group', function() {
  it('should render without error', function () {
    const text = getTextContent(<Group />);
    expect(text).to.equal('Group');
  });
});
