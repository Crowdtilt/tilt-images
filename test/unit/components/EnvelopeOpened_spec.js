'use strict';

describe('EnvelopeOpened', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        EnvelopeOpened = require("root/app/components/EnvelopeOpened");

    it("should render without error", function() {
        var e = TestUtils.renderIntoDocument(<EnvelopeOpened />);
        e = React.findDOMNode(e);
        expect(e.textContent).to.equal("EnvelopeOpened");
    });
});
