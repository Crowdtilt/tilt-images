import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('CheckmarkCircleLight', {
  className: 'tilt-icon-checkmark-circle-light',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames() } viewBox="0 0 144 144">
        <title>CheckmarkCircleLight</title>
        <g className="tilt-icon-main">
          <g className="cross" transform="translate(37.000000, 46.000000)">
            <polygon points="68.0857864 2.08578646 21.5615991 48.6099755 20.1473856 50.024189 22.9758128 52.8526161 24.3900263 51.4384025 70.9142136 4.91421354 72.3284271 3.49999995 69.4999999 0.671572875"></polygon>
            <polygon points="2.00583137 31.8826348 21.5615992 51.4384026 22.9758127 52.8526161 25.8042399 50.024189 24.3900263 48.6099754 4.83425849 29.0542076 3.42004493 27.6399941 0.591617804 30.4684212"></polygon>
          </g>
          <path className="circle" d="M72,144 C111.764502,144 144,111.764502 144,72 C144,32.235498 111.764502,0 72,0 C32.235498,0 0,32.235498 0,72 C0,111.764502 32.235498,144 72,144 L72,144 Z M72,140 C34.444637,140 4,109.555363 4,72 C4,34.444637 34.444637,4 72,4 C109.555363,4 140,34.444637 140,72 C140,109.555363 109.555363,140 72,140 L72,140 Z"></path>
        </g>
      </svg>
    );
  },
});

