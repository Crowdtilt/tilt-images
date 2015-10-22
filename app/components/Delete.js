const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'Delete',

  render() {
    const classes = classnames('tilt-icon tilt-icon-delete', this.props.className);
    return <svg viewBox="0 0 16 16" className={classes}>
      <title>Delete</title>
      <g transform="translate(-16.000000, -168)">
        <path d="M24,168 C19.6,168 16,171.6 16,176 C16,180.4 19.6,184 24,184 C28.4,184 32,180.4 32,176 C32,171.6 28.4,168 24,168 L24,168 Z M28,178.88 L26.88,180 L24,177.12 L21.12,180 L20,178.88 L22.88,176 L20,173.12 L21.12,172 L24,174.88 L26.88,172 L28,173.12 L25.12,176 L28,178.88 L28,178.88 Z" />
      </g>
    </svg>;
  },
});
