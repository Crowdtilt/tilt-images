const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('ClockMinimal', {
  className: 'tilt-icon-clock-minimal',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 23 23" >
        <title>ClockMinimal</title>
        <g className="tilt-icon-main">
          <path d="M11.471,0.063 C5.397,0.063 0.472,4.989 0.472,11.064 C0.472,17.139 5.397,22.063 11.471,22.063 C17.546,22.063 22.472,17.139 22.472,11.064 C22.472,4.989 17.546,0.063 11.471,0.063 L11.471,0.063 Z M11.471,19.672 C6.718,19.672 2.863,15.818 2.863,11.064 C2.863,6.309 6.718,2.455 11.471,2.455 C16.227,2.455 20.08,6.309 20.08,11.064 C20.08,15.818 16.227,19.672 11.471,19.672 L11.471,19.672 Z"></path>
          <path d="M12.309,4.847 L10.634,4.847 L10.634,11.41 L14.706,15.481 L15.89,14.298 L12.309,10.717 L12.309,4.847"></path>
        </g>
      </svg>
    );
  }
});