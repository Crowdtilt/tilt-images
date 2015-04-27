'use strict';

describe('TiltLogoImage', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        TiltLogoImage = require("../../../app/components/TiltLogoImage");

    it("should render without error", function() {
        var e = TestUtils.renderIntoDocument(<TiltLogoImage size={40} />);
        e = React.findDOMNode(e);
        expect(e.querySelectorAll("circle").length).to.equal(4);
    });
});
