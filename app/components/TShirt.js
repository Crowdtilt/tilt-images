const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('TShirt', {
  className: 'tilt-icon-tshirt',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 24 24">
        <title>TShirt</title>
        <g className="tilt-icon-main">
          <path d="M21.12,3.12 C20.4,2.04 19.32,1.2 18,0.84 L15.6,0 C15.6,0 14.76,2.4 12,2.4 C9.24,2.4 8.4,0 8.4,0 L6,0.84 C4.68,1.2 3.6,2.04 2.88,3.12 L0,9.6 L3.6,11.4 L4.8,9.12 L4.8,21.6 C4.8,22.92 5.88,24 7.2,24 L16.8,24 C18.12,24 19.2,22.92 19.2,21.6 L19.2,9.12 L20.4,11.4 L24,9.6 L21.12,3.12 L21.12,3.12 Z"></path>
        </g>
      </svg>
    );
  },
});
