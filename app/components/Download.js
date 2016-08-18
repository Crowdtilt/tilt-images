import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('Download', {
  className: 'tilt-icon-download',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 16 16">
        <title>Download</title>
        <g className="tilt-icon-main">
          <path d="M16,0 L0,0 L0,1.6 L16,1.6 L16,0 L16,0 Z"></path>
          <path d="M8,16 L12.8,9.6 L9.6,9.6 L9.6,3.2 L6.4,3.2 L6.4,9.6 L3.2,9.6 L8,16 Z"></path>
        </g>
      </svg>
    );
  },
});
