const React = require('react');
const TestUtils = require('react-addons-test-utils');
const TiltImages = require('../../app/components');

describe('TiltImages', function () {
  Object.keys(TiltImages).forEach(function (componentName) {
    describe(componentName, function () {
      it('should render without error', function () {
        const Component = TiltImages[componentName];
        const e = TestUtils.renderIntoDocument(<Component />);
        const text = React.findDOMNode(e).querySelector('title').textContent;
        expect(text).to.equal(componentName);
      });
    });
  });
});
