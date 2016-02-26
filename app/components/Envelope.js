const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('Envelope', {
  className: 'tilt-icon-envelope',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 16 13">
        <title>Envelope</title>
        <g className="tilt-icon-main">
          <path d="M14.4,1.6 L14.4,11.2 L1.6,11.2 L1.6,1.6 L14.4,1.6 L14.4,1.6 Z M14.4,0 L1.6,0 C0.72,0 0,0.72 0,1.6 L0,11.2 C0,12.08 0.72,12.8 1.6,12.8 L14.4,12.8 C15.28,12.8 16,12.08 16,11.2 L16,1.6 C16,0.72 15.28,0 14.4,0 L14.4,0 L14.4,0 Z"></path>
          <path d="M13.6,2.08 L8,5.6 L2.4,2.08 L2.4,3.68 L8,7.2 L13.6,3.68 L13.6,2.08 Z"></path>
        </g>
      </svg>
    );
  },
});
