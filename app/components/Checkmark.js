const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'Checkmark',

  getDefaultProps: function() {
    return {
      width: 18,
      height: 13,
    };
  },

  render() {
    const classes = classnames('tilt-icon tilt-icon-checkmark', this.props.className);

    return <svg {...this.props} className={classes} viewBox="0 0 18 13">
      <title>Checkmark</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-759.000000, -671.000000)" fill="#00A0D8">
          <path d="M759,677.419778 L761.248364,675.282444 L765.336,679.168222 L773.928545,671 L776.178545,673.135778 L765.336,683.444444 L759,677.419778 Z" />
        </g>
      </g>
    </svg>;
  },
});
