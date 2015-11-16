const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const classnames = require('classnames');

export function defineSvg(displayName, definition) {
  return React.createClass(Object.assign({
    mixins: [PureRenderMixin],

    displayName,
    getClassNames() {
      return classnames(this.props.className, 'tilt-icon', this.className);
    },
  }, definition));
}
