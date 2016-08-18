import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'Triangle',

  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      width: 10,
      height: 8,
    };
  },

  render() {
    const classes = classnames('tilt-icon tilt-icon-triangle', this.props.className);

    return (
      <svg {...this.props} width={this.props.width} height={this.props.height} className={classes} viewBox="0 0 10 8">
        <title>Triangle</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g fill="#00A0D8">
            <path d="M0.5,0.364 L9.5,0.364 L5,7.364 L0.5,0.364 L0.5,0.364 Z" />
          </g>
        </g>
      </svg>
    );
  },
});
