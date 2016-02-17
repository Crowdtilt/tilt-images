const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('CheckmarkThin', {
  className: 'tilt-icon-checkmark-thin',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 25 19">
        <title>CheckmarkThin</title>
        <g className="tilt-icon-main">
          <path d="M22.4540983,0 L7.01690572,15.4371926 L9.00158637,15.4371926 L1.98468065,8.42028687 L0,10.4049675 L7.01690572,17.4218732 L8.00924605,18.4142136 L9.00158637,17.4218732 L24.438779,1.98468065 L22.4540983,0 L22.4540983,0 Z"></path>
        </g>
      </svg>
    );
  },
});
