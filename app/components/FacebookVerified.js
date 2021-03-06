import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('FacebookVerified', {
  className: 'tilt-icon-facebook-verified',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 16 16" >
        <title>FacebookVerified</title>
        <g className="tilt-icon-main">
          <path d="M8,0 C3.582,0 0,3.581 0,7.999 C0,12.418 3.582,15.999 8,15.999 C12.419,15.999 16,12.418 16,7.999 C16,3.581 12.419,0 8,0 L8,0 Z M10.163,5.103 C10.156,5.167 10.121,5.223 10.072,5.259 C10.016,5.294 9.952,5.308 9.889,5.294 C9.628,5.237 9.298,5.202 9.065,5.202 C8.65,5.202 8.601,5.294 8.601,5.695 L8.601,6.202 L9.931,6.202 C9.994,6.202 10.058,6.237 10.1,6.286 C10.142,6.329 10.163,6.399 10.156,6.462 L10.072,7.616 C10.064,7.736 9.966,7.778 9.847,7.778 L8.601,7.778 L8.601,12.499 L6.574,12.499 L6.574,7.778 L5.906,7.778 C5.779,7.778 5.674,7.785 5.674,7.658 L5.674,6.448 C5.674,6.321 5.779,6.202 5.906,6.202 L6.574,6.202 L6.574,5.603 C6.574,4.189 7.313,3.499 8.763,3.499 C9.242,3.499 9.72,3.563 10.149,3.682 C10.262,3.71 10.339,3.823 10.325,3.936 L10.163,5.103 L10.163,5.103 Z"></path>
        </g>
      </svg>
    );
  }
});