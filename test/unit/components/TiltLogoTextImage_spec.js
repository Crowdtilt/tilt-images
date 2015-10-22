describe('TiltLogoTextImage', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        TiltLogoTextImage = require("../../../app/components/TiltLogoTextImage");

    it("should render without error", function() {
        var e = TestUtils.renderIntoDocument(<TiltLogoTextImage size={40} />);
        e = React.findDOMNode(e);
        expect(e.querySelectorAll("path").length).to.equal(2);
    });
});
