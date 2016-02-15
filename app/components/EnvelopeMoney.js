const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('EnvelopeMoney', {
  className: 'tilt-icon-envelope-money',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 24 25">
        <title>EnvelopeMoney</title>
        <g className="tilt-icon-main">
          <path d="M12,15.6 L2.4,8.4 L0,8.52 L0,21.6 C0,22.92 1.08,24 2.4,24 L21.6,24 C22.92,24 24,22.92 24,21.6 L24,8.52 L21.6,8.4 L12,15.6 L12,15.6 Z"></path>
          <path d="M22.8,6.48 L20.4,5.04 L20.4,7.8 L21.6,8.52 L21.6,21.6 L2.4,21.6 L2.4,8.52 L3.6,7.8 L3.6,5.04 L1.2,6.48 C0.48,6.96 0,7.68 0,8.52 L0,21.6 C0,22.92 1.08,24 2.4,24 L21.6,24 C22.92,24 24,22.92 24,21.6 L24,8.52 C24,7.68 23.52,6.96 22.8,6.48 L22.8,6.48 Z"></path>
          <path d="M7.2,9.6 L7.2,3.96 L7.32,3.84 L7.56,3.84 C8.4,3.84 9,3.24 9,2.52 L9,2.4 L15.12,2.4 L15.12,2.52 C15.12,3.24 15.72,3.84 16.56,3.84 L16.8,3.84 L16.8,3.96 L16.8,9.6 L19.2,7.8 L19.2,6.12 L19.2,0 L4.8,0 L4.8,6.12 L4.8,7.8 L7.2,9.6 L7.2,9.6 Z"></path>
          <ellipse cx="12" cy="4.68" rx="1.44" ry="1.32"></ellipse>
          <path d="M8.28,10.44 L12,13.2 L15.72,10.44 C15.36,8.64 13.8,7.32 12,7.32 C10.2,7.32 8.64,8.64 8.28,10.44 L8.28,10.44 Z"></path>
        </g>
      </svg>
    );
  },
});
