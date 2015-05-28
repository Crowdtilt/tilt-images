var React = require('react');

var ChevronDown = React.createClass({
    propTypes: {
        height: React.PropTypes.number,
        width: React.PropTypes.number,
        fill: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            height: 6,
            width: 10,
            fill: '#666666'
        }
    },

    render: function() {
        return (
            <svg width={this.props.width} height={this.props.height} viewBox="0 0 10 6" version="1.1">
                <title>chevron_down</title>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-1132.000000, -25.000000)" fill={this.props.fill}>
                        <path d="M1134.87904,27.5448554 L1134.4031,28.0204577 C1134.31829,28.1054719 1134.31621,28.2411194 1134.39831,28.3232164 L1138.38689,32.3809752 C1138.46899,32.4632806 1138.60442,32.4609885 1138.68923,32.3761828 L1139.27308,31.7923356 C1139.35788,31.7075298 1139.35997,31.5720906 1139.27787,31.4897852 L1136.0115,28.1665855 L1139.27006,24.7797571 C1139.35153,24.6984936 1139.34944,24.564513 1139.26547,24.4803323 L1138.68746,23.9025278 C1138.60349,23.8185555 1138.46951,23.8162634 1138.38803,23.8979437 L1134.87904,27.5448554 Z" id="chevron_down" transform="translate(1136.838089, 28.139682) rotate(-90.000000) translate(-1136.838089, -28.139682) "></path>
                    </g>
                </g>
            </svg>
        );
    }
});

module.exports = ChevronDown;
