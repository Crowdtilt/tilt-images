const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const GroupSolid = require('root/app/components/GroupSolid');

describe('GroupSolid', function() {

    it('should render without error', function() {
        const e = React.findDOMNode(TestUtils.renderIntoDocument(<EnvelopeOpened />));
        expect(e.textContent).to.equal('GroupSolid icon');
    });
});
