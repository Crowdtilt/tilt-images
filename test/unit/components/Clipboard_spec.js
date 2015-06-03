'use strict';

describe('Clipboard', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        Clipboard = require("root/app/components/Clipboard");

    it("should render without error", function() {
        var e = TestUtils.renderIntoDocument(<Clipboard />);
        e = React.findDOMNode(e);
        expect(e.textContent).to.equal("Clipboard");
    });
});
