const React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    TiltLogo = require('root/app/components/TiltLogo');

describe('TiltLogo', function() {
    it('renders without error', function() {
        var e = TestUtils.renderIntoDocument(<TiltLogo />);
        e = React.findDOMNode(e);
        expect(e.textContent).to.equal('TiltLogo');
    });
});
