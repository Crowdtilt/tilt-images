const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'TiltLogo',

  renderInternalCircle: function(ref, x, y) {
    const props = {
      ref: ref,
      cx: x,
      cy: y,
    };
    const classes = classnames(`tilt-logo-inner-circle tilt-logo-${ref}`);
    return <circle className={classes} {...props} r='10' />;
  },

  render() {
    const classes = classnames('tilt-icon tilt-icon-logo', this.props.className);

    return <svg className={classes} x='0' y='0' viewBox='0 0 144 144'>
      <title>TiltLogo</title>
      <g className='tilt-icon-main'>
        <circle className='tilt-logo-outside-circle' strokeWidth='10' cx='72' cy='72' r='66'/>
        {this.renderInternalCircle('circle1', 62, 103)}
        {this.renderInternalCircle('circle2', 72, 72)}
        {this.renderInternalCircle('circle3', 81, 42)}
      </g>
    </svg>;
  },
});
