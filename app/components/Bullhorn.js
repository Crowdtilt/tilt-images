import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('Bullhorn', {
  className: 'tilt-icon-bullhorn',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 25 21">
        <title>Bullhorn</title>
        <g className="tilt-icon-main">
          <path className="bullhorn-handle" d="M7.613006,11 L13.8024797,12.7684211 L12.413006,17.4421053 C12.0340586,18.8315789 10.6445849,19.5894737 9.25511126,19.2105263 L7.86563758,18.8315789 C6.47616389,18.4526316 5.71826916,17.0631579 6.09721652,15.6736842 L7.613006,11 L7.613006,11 Z"></path>
          <path className="bullhorn-horn" d="M3,6.31578947 L24.4736842,0 L24.4736842,20.2105263 L3,13.8947368 L3,6.31578947 Z"></path>
          <path className="bullhorn-rim" d="M1,6 L1,13.5789474"></path>
        </g>
      </svg>
    );
  },
});
