const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('SendMessageEnvelope', {
  className: 'tilt-icon-send-message',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 16 11" >
        <title>SendMessageEnvelope</title>
        <g className="tilt-icon-main">
          <path d="M15.645,1.04 L15.645,9.367 L11.482,5.203 L15.645,1.04 L15.645,1.04 Z M0,0 L15.645,0 L8.132,6.602 L0,0 L0,0 Z M4.554,5.203 L0.033,9.367 L0.033,1.04 L4.554,5.203 L4.554,5.203 Z M8.359,8.326 L10.734,6.016 L15.645,10.408 L0,10.408 L5.237,6.049 L8.359,8.326 L8.359,8.326 Z"></path>
        </g>
      </svg>
    );
  }
});