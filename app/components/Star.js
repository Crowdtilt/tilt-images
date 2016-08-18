import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'Star',

  render() {
    const classes = classnames('tilt-icon tilt-icon-star', this.props.className);
    return <svg className={classes} viewBox="0 0 26 25">
      <title>Star</title>
      <g className="tilt-icon-main">
        <g transform="translate(-288.000000, -778.000000)">
          <path d="M314,787.433962 L304.075893,787.433962 L301,778 L297.924107,787.433962 L288,787.433962 L296.008929,793.212264 L293.107143,802.528302 L301,797.103774 L308.892857,802.528302 L305.991071,793.212264 L314,787.433962" />
        </g>
      </g>
    </svg>;
  },
});
