const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('Refund', {
  className: 'tilt-icon-refund',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 17 14" >
        <title>Refund</title>
        <g className="tilt-icon-main">
          <path d="M16.4375,2.75 L16.4375,10.75"></path>
          <path d="M14.1875,2.75 L14.1875,10.75"></path>
          <path d="M11.9375,2.75 L11.9375,10.75"></path>
          <path d="M7.875,0 L7.875,13.5 L0,6.75 L7.875,0 Z"></path>
          <rect x="6.875" y="2.25" width="3.375" height="9"></rect>
        </g>
      </svg>
    );
  }
});