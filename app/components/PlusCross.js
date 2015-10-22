const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'PlusCross',

  render() {
    const classes = classnames('tilt-icon tilt-icon-plus-cross', this.props.className);
    return <svg viewBox="0 0 16 16" className={classes}>
      <title>PlusCross</title>
      <g transform="translate(-16, -66)">
        <path d="M25.3420465,72.6580193 L25.3420465,67 L22.6581163,67 L22.6581163,72.6580193 L17,72.6580193 L17,75.3419807 L22.6581163,75.3419807 L22.6581163,81 L25.3420465,81 L25.3420465,75.3419807 L31,75.3419807 L31,72.6580193 L25.3420465,72.6580193 Z" />
      </g>
    </svg>;
  },
});
