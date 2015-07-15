'use strict';

const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
    displayName: 'OneLeft',

    render: function() {

        const classes = classnames({
            'tilt-icon': true,
            'tilt-icon-one-left': true,
            [this.props.className]: !!this.props.className
        });
        return <svg {...this.props} className={classes} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-3 -3 41 41" enableBackground="new -3 -3 41 41">
            <title>OneLeft</title>
            <g className="tilt-icon-main">
                <circle cx="18" cy="18" r="18"></circle>
                <text transform="matrix(1 0 0 1 14.108 18)" fill="#FFFFFF" style={{
fontSize: '14px', fontFamily: 'HelveticaNeueRoman'}}>1</text>
                <text transform="matrix(1 0 0 1 11.15 28)" fill="#FFFFFF" style={{
fontSize: '10px', fontFamily: 'HelveticaNeueRoman'}}>left</text>
            </g>
        </svg>
    }
});
