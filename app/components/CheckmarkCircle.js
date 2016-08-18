import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('CheckmarkCircle', {
  className: 'tilt-icon-checkmark-circle',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames()} viewBox="0 0 32 32">
        <title>CheckmarkCircle</title>
        <g className="tilt-icon-main">
          <circle className="checkmark-circle-background" cx="15" cy="15" r="14"></circle>
          <path className="checkmark-check" d="m19.75076,10.31629l-7.59825,7.59826l1.30249,0l-3.45375,-3.45375l-1.30249,1.30249l3.45375,3.45375l0.65125,0.65125l0.65124,-0.65125l7.59826,-7.59825l-1.3025,-1.3025l0,0z"></path>
        </g>
      </svg>
    );
  },
});
