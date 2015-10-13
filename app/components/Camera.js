const React = require('react');
const classnames = require('classnames');

const Camera = React.createClass({
  displayName: 'Camera',

  render() {
    return (
      <svg width="26px" height="23px" viewBox="0 0 26 23" version="1.1"
            className={classnames('tilt-icon tilt-camera', this.props.className)}>
        <title>camera</title>
        <defs></defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-722.000000, -146.000000)">
            <g transform="translate(720.000000, 144.000000)">
              <rect x="0" y="0" width="30" height="30"></rect>
              <path d="M25,5 L5,5 C3.625,5 2.5,6.125 2.5,7.5 L2.5,22.5 C2.5,23.875 3.625,25 5,25 L25,25 C26.375,25 27.5,23.875 27.5,22.5 L27.5,7.5 C27.5,6.125 26.375,5 25,5 L25,5 Z M15,21.25 C11.5,21.25 8.75,18.5 8.75,15 C8.75,11.5 11.5,8.75 15,8.75 C18.5,8.75 21.25,11.5 21.25,15 C21.25,18.5 18.5,21.25 15,21.25 L15,21.25 Z" fill="#858585"></path>
              <circle fill="#858585" cx="15" cy="15" r="4.375"></circle>
              <path d="M22.5,6.25 L18.75,2.5 L11.25,2.5 L7.5,6.25 L22.5,6.25 Z" fill="#858585"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  }
});

module.exports = Camera;
