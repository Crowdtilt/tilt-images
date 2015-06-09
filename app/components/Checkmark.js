var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            width: '18px',
            height: '13px'
        }
    },
    render: function() {
        var classes = classnames({
            'tilt-icon': true,
            'tilt-icon-checkmark': true,
            [this.props.className]: !!this.props.className
        });
        return <svg {...this.props} className={classes} viewBox="0 0 18 13" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Desktop-HD-2-Copy-16" transform="translate(-759.000000, -671.000000)" fill="#00A0D8">
                    <path d="M759,677.419778 L761.248364,675.282444 L765.336,679.168222 L773.928545,671 L776.178545,673.135778 L765.336,683.444444 L759,677.419778 Z" id="Check"></path>
                </g>
            </g>
        </svg>
    }
});
