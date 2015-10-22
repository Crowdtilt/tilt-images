const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'OneLeft',

  render() {
    const classes = classnames('tilt-icon tilt-icon-one-left', this.props.className);
    const textStyle1 = {
      fontSize: '14px',
      fontFamily: 'HelveticaNeueRoman',
    };
    const textStyle2 = {
      fontSize: '10px',
      fontFamily: 'HelveticaNeueRoman',
    };

    return <svg {...this.props} className={classes} x="0px" y="0px" viewBox="-3 -3 41 41" enableBackground="new -3 -3 41 41">
      <title>OneLeft</title>
      <g className="tilt-icon-main">
        <circle cx="18" cy="18" r="18"></circle>
        <text transform="matrix(1 0 0 1 14.108 18)" fill="#FFFFFF" style={textStyle1}>1</text>
        <text transform="matrix(1 0 0 1 11.15 28)" fill="#FFFFFF" style={textStyle2}>left</text>
      </g>
    </svg>;
  },
});
