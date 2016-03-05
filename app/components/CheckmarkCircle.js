const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('CheckmarkCircle', {
  className: 'tilt-icon-checkmark-circle',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 32 32">
        <title>CheckmarkCircle</title>
        <g className="tilt-icon-main">
          <circle className="checkmark-circle-background" cx="15" cy="15" r="14"></circle>
          <path className="checkmark-check" d="M19.0611447,9.2818641 L11.4628893,16.8801195 L12.7653809,16.8801195 L9.31162845,13.4263671 L8.00913682,14.7288587 L11.4628893,18.1826112 L12.1141351,18.833857 L12.7653809,18.1826112 L20.3636364,10.5843557 L19.0611447,9.2818641 L19.0611447,9.2818641 Z"></path>
        </g>
      </svg>
    );
  },
});
