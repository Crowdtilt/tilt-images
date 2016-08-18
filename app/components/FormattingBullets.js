import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('FormattingBullets', {
  className: 'tilt-icon-formatting-bullets',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 14 13">
        <title>FormattingBullets</title>
        <g className="tilt-icon-main">
          <rect x="5" y="1" width="9" height="1"></rect>
          <rect x="5" y="11" width="9" height="1"></rect>
          <rect x="5" y="6" width="9" height="1"></rect>
          <circle cx="1.5" cy="1.5" r="1.5"></circle>
          <circle cx="1.5" cy="11.5" r="1.5"></circle>
          <circle cx="1.5" cy="6.5" r="1.5"></circle>
        </g>
      </svg>
    );
  },
});
