const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const WhatsAppLogo = require('root/app/components/WhatsAppLogo');

describe('WhatsAppLogo', function() {
    it('should render without error', function() {
        const element = React.findDOMNode(TestUtils.renderIntoDocument(<WhatsAppLogo />));

        expect(element.textContent).to.equal('WhatsAppLogo');
    });
});
