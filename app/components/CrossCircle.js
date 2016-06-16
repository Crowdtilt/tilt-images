const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('CrossCircle', {
  className: 'tilt-icon-cross-circle',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames() } viewBox="0 0 144 144">
        <title>CrossCircle</title>
        <g className="tilt-icon-main">
          <g transform="translate(-303.000000, -191.000000)" fill="#FFFFFF">
            <g transform="translate(303.000000, 191.000000)">
              <g className="cross" transform="translate(43.000000, 42.000000)">
                <polygon points="0.779619771 3.6080469 56.5530642 59.3814913 59.3814913 56.5530642 3.6080469 0.779619771"></polygon>
                <polygon points="56.390342 0.781230882 0.581453104 56.5901198 3.40988023 59.4185469 59.2187691 3.60965801"></polygon>
              </g>
              <path className="circle" d="M72,144 C111.764502,144 144,111.764502 144,72 C144,32.235498 111.764502,0 72,0 C32.235498,0 0,32.235498 0,72 C0,111.764502 32.235498,144 72,144 L72,144 Z M72,140 C34.444637,140 4,109.555363 4,72 C4,34.444637 34.444637,4 72,4 C109.555363,4 140,34.444637 140,72 C140,109.555363 109.555363,140 72,140 L72,140 Z"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
