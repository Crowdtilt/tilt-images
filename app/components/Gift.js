import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'Gift',

  render() {
    const classes = classnames('tilt-icon tilt-icon-gift', this.props.className);

    return <svg version="1.1" {...this.props} className={classes} x="0px" y="0px" viewBox="-4 -3 41 41" enableBackground="new -4 -3 41 41">
      <title>Gift</title>
      <g transform="translate(-4.000000, -338.000000)">
        <g transform="translate(0.000000, 335.000000)">
          <rect fill="#D8D8D8" fillOpacity="0" width="41" height="41">
          </rect>
          <g transform="translate(4.000000, 4.000000)">
            <rect x="13.6" y="1.7" fill="#00A0D8" width="6.8" height="6.8"/>
            <path fill="none" stroke="#00A0D8" strokeWidth="2" d="M28.9,3.4c0,1.9-1.5,3.4-3.4,3.4H17c0,0,4.4-6.8,8.5-6.8
              C27.4,0,28.9,1.5,28.9,3.4L28.9,3.4z"/>
            <path fill="none" stroke="#00A0D8" strokeWidth="2" d="M5.1,3.4c0,1.9,1.5,3.4,3.4,3.4H17c0,0-4.4-6.8-8.5-6.8
              C6.6,0,5.1,1.5,5.1,3.4L5.1,3.4z"/>
            <g transform="translate(0.000000, 6.800000)">
              <path fill="#00A0D8" d="M13.6,8.5H1.7v15.3c0,1.9,1.5,3.4,3.4,3.4h8.5V8.5L13.6,8.5z"/>
              <path fill="#00A0D8" d="M20.4,27.2h8.5c1.9,0,3.4-1.5,3.4-3.4V8.5H20.4V27.2L20.4,27.2z"/>
              <path fill="#00A0D8" d="M30.6,0H3.4C1.5,0,0,1.5,0,3.4v3.4h13.6V1.7h6.8v5.1H34V3.4C34,1.5,32.5,0,30.6,0L30.6,0z"/>
            </g>
          </g>
        </g>
      </g>
    </svg>;
  },
});
