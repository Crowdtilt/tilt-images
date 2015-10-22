const React = require('react');
const classnames = require('classnames');

export function defineSvg(displayName, definition) {
  return React.createClass(Object.assign({
    displayName, 
    getClassNames() {
      return classnames(this.props.className, 'tilt-icon', this.className);
    },
  }, definition));
}
