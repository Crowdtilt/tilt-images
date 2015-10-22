const React = require('react');
const LockSolid = require('root/app/components/LockSolid');
const {getTextContent} = require('../helpers/getTextContent');

describe('LockSolid', function() {
  it('should render without error', function () {
    const text = getTextContent(<LockSolid />);
    expect(text).to.equal('LockSolid');
  });
});
