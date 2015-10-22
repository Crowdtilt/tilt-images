const React = require('react/addons')
const TestUtils = React.addons.TestUtils;

export function getTextContent(component) {
  const e = TestUtils.renderIntoDocument(component);
  return React.findDOMNode(e).textContent;
}
