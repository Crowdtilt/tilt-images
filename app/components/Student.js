const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('Student', {
  className: 'tilt-icon-student',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 16 14">
        <title>Student</title>
        <g className="tilt-icon-main">
          <path d="M8,0 L0,4.36363636 L8,8.72727273 L16,4.36363636 L8,0 Z"></path>
          <path d="M13.0909091,7.12727273 L8,10.1818182 L2.90909091,7.12727273 L2.90909091,10.3272727 L8,13.0909091 L13.0909091,10.3272727 L13.0909091,7.12727273 Z"></path>
          <rect x="14.5454545" y="4.36363636" width="1.45454545" height="5.81818182"></rect>
        </g>
      </svg>
    );
  },
});
