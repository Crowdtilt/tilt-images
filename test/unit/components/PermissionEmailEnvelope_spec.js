'use strict';

describe('PermissionEmailEnvelope', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        PermissionEmailEnvelope = require("root/app/components/PermissionEmailEnvelope");

    it("should render without error", function() {
        var e = TestUtils.renderIntoDocument(<PermissionEmailEnvelope />);
        e = React.findDOMNode(e);
        expect(e.textContent).to.equal("PermissionEmailEnvelope");
    });
});
