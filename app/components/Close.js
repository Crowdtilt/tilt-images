import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'Close',

  render() {
    const classes = classnames('tilt-icon tilt-icon-close', this.props.className);
    return <svg viewBox="0 0 11 11" className={classes}>
      <title>Close</title>
      <g transform="translate(-12, -12)">
        <path d="M17.4,16.0805217 L13.3194783,12 L12,13.3190087 L16.0809913,17.3995304 L12,21.4805217 L13.3194783,22.7995304 L17.4,18.7190087 L21.4809913,22.8 L22.8004696,21.4805217 L18.7194783,17.3995304 L22.8,13.3190087 L21.4809913,12 L17.4,16.0805217 Z"/>
      </g>
    </svg>;
  },
});
