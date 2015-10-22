const React = require('react/addons');
const classnames = require('classnames');

export function defineSvg(displayName, definition) {
  return React.createClass(Object.assign({
    mixins: [React.addons.PureRenderMixin],

    displayName,
    getClassNames() {
      return classnames(this.props.className, 'tilt-icon', this.className);
    },
  }, definition));
}
