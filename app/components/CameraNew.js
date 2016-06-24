const React = require('react');
const { defineSvg } = require('../defineSvg');
const classnames = require('classnames');

module.exports = defineSvg('CameraNew', {
  className: 'tilt-icon-camera-new',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 23 18">
        <title>CameraNew</title>
          <g className="icon-group" transform="translate(-771.000000, -325.000000)">
            <path d="M782.25,331.75 C780.385,331.75 778.875,333.262 778.875,335.125 C778.875,336.99 780.385,338.5 782.25,338.5 C784.113,338.5 785.625,336.99 785.625,335.125 C785.625,333.262 784.113,331.75 782.25,331.75 L782.25,331.75 Z M791.25,328.375 L788.549,328.375 C788.178,328.375 787.778,328.087 787.661,327.735 L786.963,325.641 C786.845,325.289 786.446,325 786.075,325 L778.424,325 C778.053,325 777.653,325.289 777.536,325.641 L776.838,327.735 C776.72,328.087 776.321,328.375 775.95,328.375 L773.25,328.375 C772.012,328.375 771,329.388 771,330.625 L771,340.75 C771,341.988 772.012,343 773.25,343 L791.25,343 C792.487,343 793.5,341.988 793.5,340.75 L793.5,330.625 C793.5,329.388 792.487,328.375 791.25,328.375 L791.25,328.375 Z M782.25,340.75 C779.143,340.75 776.625,338.232 776.625,335.125 C776.625,332.019 779.143,329.5 782.25,329.5 C785.356,329.5 787.875,332.019 787.875,335.125 C787.875,338.232 785.356,340.75 782.25,340.75 L782.25,340.75 Z M790.462,332.199 C790.027,332.199 789.674,331.847 789.674,331.412 C789.674,330.977 790.027,330.624 790.462,330.624 C790.897,330.624 791.25,330.977 791.25,331.412 C791.25,331.847 790.897,332.199 790.462,332.199 L790.462,332.199 Z"></path>
          </g>
      </svg>
    );
  },
});
