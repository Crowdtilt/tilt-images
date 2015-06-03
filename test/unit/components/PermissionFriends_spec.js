'use strict';

describe('PermissionFriends', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        PermissionFriends = require("root/app/components/PermissionFriends");

    it("should render without error", function() {
        var e = TestUtils.renderIntoDocument(<PermissionFriends />);
        e = React.findDOMNode(e);
        expect(e.textContent).to.equal("PermissionFriends");
    });
});
