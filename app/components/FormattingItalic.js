const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('FormattingItalic', {
  className: 'tilt-icon-formatting-italic',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 5 9">
        <title>FormattingItalic</title>
        <g className="tilt-icon-main">
          <rect x="1" y="0" width="4" height="1.5"></rect>
          <rect x="0" y="7.5" width="4" height="1.5"></rect>
          <g transform="translate(1.000000, 0.000000)">
            <path d="M1.6,8.75 L0.1,8.75 L1.35,0.25 L2.85,0.25 L1.6,8.75 L1.6,8.75 Z"></path>
          </g>
        </g>
      </svg>
    );
  },
});
