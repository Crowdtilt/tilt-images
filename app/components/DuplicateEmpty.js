const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('DuplicateEmpty', {
  className: 'tilt-icon-duplicate-empty',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 14 17">
        <title>DuplicateEmpty</title>
        <g className="tilt-icon-main">
          <g transform="translate(3.294118, 3.360000)">
            <path d="M9.05882353,1.68 L9.05882353,11.76 L1.64705882,11.76 L1.64705882,1.68 L9.05882353,1.68 L9.05882353,1.68 Z M9.05882353,0 L1.64705882,0 C0.741176471,0 0,0.756 0,1.68 L0,11.76 C0,12.684 0.741176471,13.44 1.64705882,13.44 L9.05882353,13.44 C9.96470588,13.44 10.7058824,12.684 10.7058824,11.76 L10.7058824,1.68 C10.7058824,0.756 9.96470588,0 9.05882353,0 L9.05882353,0 L9.05882353,0 Z"></path>
          </g>
          <path d="M1.64705882,12.6 L1.64705882,1.68 L9.88235294,1.68 L9.88235294,0 L1.64705882,0 C0.741176471,0 0,0.756 0,1.68 L0,12.6 L1.64705882,12.6 L1.64705882,12.6 Z"></path>
        </g>
      </svg>
    );
  },
});
