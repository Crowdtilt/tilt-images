'use strict';

var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({
    render: function() {

        var classes = classnames({
            'tilt-icon': true,
            'tilt-icon-one-left': true,
            [this.props.className]: !!this.props.className
        });
        return <svg {...this.props} className={classes} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-3 -3 41 41" enableBackground="new -3 -3 41 41">
            <g id="Page-1">
                <g id="Artboard-10-Copy" transform="translate(-3.000000, -198.000000)">
                    <g id="one-left" transform="translate(0.000000, 195.000000)">
                        <rect id="Rectangle-156" fill="#D8D8D8" fillOpacity="0" width="41" height="41"></rect>
                        <g id="Oval-11-_x2B_-1-_x2B_-left" transform="translate(3.000000, 3.000000)">
                            <circle id="Oval-11" fill="#00A0D8" cx="18" cy="18" r="18"></circle>
                            <text transform="matrix(1 0 0 1 14.108 18)" fill="#FFFFFF" style={{
            fontSize: '14px', fontFamily: 'HelveticaNeueRoman'}}>1</text>
                            <text transform="matrix(1 0 0 1 11.15 28)" fill="#FFFFFF" style={{
            fontSize: '10px', fontFamily: 'HelveticaNeueRoman'}}>left</text>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    }
});
