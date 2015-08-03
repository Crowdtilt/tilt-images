const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
    displayName: 'Triangle',

    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number
    },

    getDefaultProps: function() {
        return {
            width: 10,
            height: 8
        }
    },

    render() {
        const classes = classnames({
            'tilt-icon': true,
            'tilt-icon-triangle': true,
            [this.props.className]: !!this.props.className
        });
        return (
            <svg {...this.props} width={this.props.width} height={this.props.height} className={classes} viewBox="0 0 10 8">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="triangle" fill="#00A0D8">
                        <g id="Page-1">
                            <g id="Desktop-HD-2-Copy-17">
                                <path d="M0.5,0.364 L9.5,0.364 L5,7.364 L0.5,0.364 L0.5,0.364 Z" id="Triangle-3"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
});
