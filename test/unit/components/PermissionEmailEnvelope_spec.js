const React = require('react');
const PermissionEmailEnvelope = require('root/app/components/PermissionEmailEnvelope');
const {getTextContent} = require('../helpers/getTextContent');

describe('PermissionEmailEnvelope', function() {
  it('should render without error', function () {
    const text = getTextContent(<PermissionEmailEnvelope />);
    expect(text).to.equal('PermissionEmailEnvelope');
  });
});
