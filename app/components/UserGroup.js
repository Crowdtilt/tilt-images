import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('UserGroup', {
  className: 'tilt-icon-user-group',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 26 21">
        <title>UserGroup</title>
        <g className="tilt-icon-main">
          <ellipse cx="8.6" cy="2.6" rx="2.6" ry="2.6"></ellipse>
          <ellipse cx="16.6" cy="2.6" rx="2.6" ry="2.6"></ellipse>
          <path d="M10.6,12.6 C10.6,11.17 11.77,10 13.2,10 C14.63,10 15.8,11.17 15.8,12.6 C15.8,14.03 14.63,15.2 13.2,15.2 C11.77,15.2 10.6,14.03 10.6,12.6 L10.6,12.6 Z M13.2,16.5 C9.3,16.5 8,19.36 8,19.36 L8,20.4 L18.4,20.4 L18.4,19.36 C18.4,19.36 17.1,16.5 13.2,16.5 L13.2,16.5 Z"></path>
          <path d="M17.95,9.6 C17.95,8.17 19.12,7 20.55,7 C21.98,7 23.15,8.17 23.15,9.6 C23.15,11.03 21.98,12.2 20.55,12.2 C19.12,12.2 17.95,11.03 17.95,9.6 L17.95,9.6 Z M20.55,13.5 C17.04,13.5 16,16.36 16,16.36 L16,17.4 L25.1,17.4 L25.1,16.36 C25.1,16.36 24.06,13.5 20.55,13.5 L20.55,13.5 Z"></path>
          <path d="M1.95,9.6 C1.95,8.17 3.12,7 4.55,7 C5.98,7 7.15,8.17 7.15,9.6 C7.15,11.03 5.98,12.2 4.55,12.2 C3.12,12.2 1.95,11.03 1.95,9.6 L1.95,9.6 Z M4.55,13.5 C1.04,13.5 0,16.36 0,16.36 L0,17.4 L9.1,17.4 L9.1,16.36 C9.1,16.36 8.06,13.5 4.55,13.5 L4.55,13.5 Z"></path>
        </g>
      </svg>
    );
  },
});
