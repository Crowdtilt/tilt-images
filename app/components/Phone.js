const React = require('react');
const classnames = require('classnames');

const Phone = React.createClass({
  displayName: 'Phone',

  render() {
    const classes = classnames('tilt-icon tilt-icon-phone', this.props.className);

    return (
      <svg className={classes} viewBox="0 0 14 24">
          <title>Phone</title>
          <g className="tilt-icon-main" transform="translate(-97.000000, -612.000000)">
            <path d="M97,614.004947 C97,612.897645 97.8970601,612 99.0058587,612 L108.994141,612 C110.101946,612 111,612.897026 111,614.004947 L111,633.995053 C111,635.102355 110.10294,636 108.994141,636 L99.0058587,636 C97.8980535,636 97,635.102974 97,633.995053 L97,614.004947 Z M100,614 L108,614 L108,615 L100,615 L100,614 Z M98,616 L110,616 L110,632 L98,632 L98,616 Z M104,635 C104.552285,635 105,634.552285 105,634 C105,633.447715 104.552285,633 104,633 C103.447715,633 103,633.447715 103,634 C103,634.552285 103.447715,635 104,635 Z"></path>
          </g>
      </svg>
    );
  },
});

module.exports = Phone;
