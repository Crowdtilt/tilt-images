var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({

    render: function() {
        var classes = classnames({
            'tilt-icon': true,
            'tilt-icon-clipboard': true,
            [this.props.className]: !!this.props.className
        });
        return <svg {...this.props} className={classes} x="0px" y="0px" viewBox="-6 -2 41 41" enableBackground="new -6 -2 41 41">
            <g id="Page-1">
                <g id="Artboard-10-Copy" transform="translate(-6.000000, -58.000000)">
                    <g id="clipboard" transform="translate(0.000000, 56.000000)">
                        <rect id="Rectangle-156" fill="#D8D8D8" fillOpacity="0" width="41" height="41">
                        </rect>
                        <g id="treatment_plan" transform="translate(6.000000, 2.000000)">
                            <path id="Shape" fill="#00A0D8" d="M26.7,3.3h-7C19,1.3,17.2,0,15,0s-4,1.3-4.7,3.3h-7C1.5,3.3,0,4.8,0,6.7v26.7
                                c0,1.8,1.5,3.3,3.3,3.3h23.3c1.8,0,3.3-1.5,3.3-3.3V6.7C30,4.8,28.5,3.3,26.7,3.3L26.7,3.3z M15,3.3c1,0,1.7,0.7,1.7,1.7
                                S16,6.7,15,6.7S13.3,6,13.3,5S14,3.3,15,3.3L15,3.3z M26.7,33.3H3.3V6.7h3.3V10h16.7V6.7h3.3V33.3L26.7,33.3z"/>
                        </g>
                    </g>
                </g>
            </g>
            </svg>;
    }
});
