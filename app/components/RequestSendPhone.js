import React from 'react';
import classnames from 'classnames';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('RequestSendPhone', {
  className: 'tilt-icon-request-send-phone',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames()} viewBox="0 0 39 23">
          <title>RequestSendPhone</title>
          <g transform="translate(12.000000, 0.000000)">
            <path d="M13.8,0 L2.3,0 C1.03155,0 0,1.03155 0,2.3 L0,20.7 C0,21.96845 1.03155,23 2.3,23 L13.8,23 C15.06845,23 16.1,21.96845 16.1,20.7 L16.1,2.3 C16.1,1.03155 15.06845,0 13.8,0 L13.8,0 Z M7.475,1.15 L8.625,1.15 C8.94125,1.15 9.2,1.40875 9.2,1.725 C9.2,2.04125 8.94125,2.3 8.625,2.3 L7.475,2.3 C7.15875,2.3 6.9,2.04125 6.9,1.725 C6.9,1.40875 7.15875,1.15 7.475,1.15 L7.475,1.15 Z M8.05,21.85 C7.4152,21.85 6.9,21.3348 6.9,20.7 C6.9,20.0652 7.4152,19.55 8.05,19.55 C8.6848,19.55 9.2,20.0652 9.2,20.7 C9.2,21.3348 8.6848,21.85 8.05,21.85 L8.05,21.85 Z M13.8,18.4 L2.3,18.4 L2.3,3.45 L13.8,3.45 L13.8,18.4 L13.8,18.4 Z"></path>
          </g>
          <g transform="translate(4.500000, 8.000000) rotate(-270.000000) translate(-4.500000, -8.000000) translate(1.500000, 3.500000)">
            <rect x="2" y="0" width="2" height="6"></rect>
            <polygon points="3 9 0 5 6 5"></polygon>
          </g>
          <g transform="translate(34.500000, 16.000000) rotate(-90.000000) translate(-34.500000, -16.000000) translate(31.500000, 11.500000)" >
            <rect x="2" y="0" width="2" height="6"></rect>
            <polygon points="3 9 0 5 6 5"></polygon>
          </g>
      </svg>
    );
  },
});
