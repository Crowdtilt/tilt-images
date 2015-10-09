const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'Clipboard',

  render() {
    const classes = classnames({
      'tilt-icon': true,
      'tilt-icon-clipboard': true,
      [this.props.className]: !!this.props.className
    });
    return <svg {...this.props} className={classes} viewBox="-6 -2 41 41" enableBackground="new -6 -2 41 41">
      <title>Clipboard</title>
      <g className="tilt-icon-main">
        <path d="M26.7,3.3h-7C19,1.3,17.2,0,15,0s-4,1.3-4.7,3.3h-7C1.5,3.3,0,4.8,0,6.7v26.7
          c0,1.8,1.5,3.3,3.3,3.3h23.3c1.8,0,3.3-1.5,3.3-3.3V6.7C30,4.8,28.5,3.3,26.7,3.3L26.7,3.3z M15,3.3c1,0,1.7,0.7,1.7,1.7
          S16,6.7,15,6.7S13.3,6,13.3,5S14,3.3,15,3.3L15,3.3z M26.7,33.3H3.3V6.7h3.3V10h16.7V6.7h3.3V33.3L26.7,33.3z"/>
      </g>
    </svg>;
  }
});
