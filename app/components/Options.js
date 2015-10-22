const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'Options',

  render() {
    const classes = classnames('tilt-icon tilt-icon-options', this.props.className);

    return <svg {...this.props} className={classes} x="0px" y="0px" viewBox="0 0 41 41" enableBackground="new 0 0 41 41">
      <title>Options</title>
      <g>
        <rect fill="#D8D8D8" fillOpacity="1.000000e-02" width="41" height="41" />
        <g transform="translate(4.000000, 4.000000)">
          <path fill="#00A0D8" d="M7.1,7.1c1.2-1.2,4.4-1.7,6.5-1.9V0H6.8H0v6.8v6.8h5.3C5.4,11.6,5.9,8.3,7.1,7.1L7.1,7.1z"/>
          <path fill="#00A0D8" d="M23.5,11.9c-0.3-1.5-0.7-3.1-1.2-3.6c-0.9-1-5.6-1.5-7-1.5s-6.1,0.5-7,1.5
            c-1,0.9-1.5,5.6-1.5,7s0.5,6.1,1.5,7c0.5,0.5,2,0.9,3.6,1.2C12.1,17.2,17.2,12.1,23.5,11.9L23.5,11.9z"/>
          <circle fill="#00A0D8" cx="23.8" cy="23.8" r="10.2"/>
        </g>
      </g>
    </svg>;
  },
});
