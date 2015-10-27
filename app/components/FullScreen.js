const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('FullScreen', {
  className: 'tilt-icon-tag-zoom',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 20 20" >
        <title>FullScreen</title>
        <g className="tilt-icon-main" transform="translate(1, 1)">
          <path d="M6,18 L0,18 L0,12" ></path>
          <path d="M6.3,11.7 L0.4,17.6" ></path>
          <path d="M12,0 L18,0 L18,6" ></path>
          <path d="M11.7,6.3 L17.6,0.4" ></path>
        </g>
      </svg>
    );
  }
});
