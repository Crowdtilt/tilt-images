var React = require("react"),
    BLUE_COLOR = "#19A1D6";

var TiltLogoImage = React.createClass({
    displayName: "TiltLogoImage",

    propTypes: {
        size: React.PropTypes.number.isRequired,
    },

    renderInternalCircle: function(ref, x, y, r) {
        var props = {
            ref: ref,
            cx: x,
            cy: y,
            r: r,
            fill: BLUE_COLOR
        };
        return <circle {...props} />;
    },

    getHeight: function() {
        return this.props.size;
    },

    getWidth: function() {
        return this.getHeight();
    },

    render: function() {
        var width = this.getWidth(),
            height = this.getHeight(),
            center = width/2,
            radius = 69;

        return (
            <svg ref="circle" width={width} height={height} x="0" y="0" viewBox="0 0 144 144">
                <circle stroke={BLUE_COLOR} fill="none" strokeWidth="10" cx="72" cy="72" r="66"/>
                {this.renderInternalCircle("circle1", 62, 103, 10)}
                {this.renderInternalCircle("circle2", 72, 72, 10)}
                {this.renderInternalCircle("circle3", 81, 42, 10)}
            </svg>
        );
    },
});

module.exports = TiltLogoImage;
