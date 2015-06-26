const React = require('react'),
    classnames = require('classnames');

module.exports = React.createClass({
    displayName: 'ChevronIcon',

    getTransforms() {
        const rotationAngle = this.props.rotation;
        if (rotationAngle !== undefined) {
            return `rotate(${rotationAngle}, 5, 3)`;
        }
    },

    render() {
        const classes = classnames({
            'tilt-icon': true,
            'tilt-icon-chevron': true,
        });

        if (this.props.className) {
            classes[this.props.className] = true;
        }

        return (
            <svg className={classes} viewBox="0 0 10 6" version="1.1">
                <title>Chevron</title>
                <path
                    transform={this.getTransforms()}
                    d="M2.87904,2.54486 L2.4031,3.02046 C2.31829,3.10547 2.31621,3.24112 2.39831,3.32322 L6.38689,7.38098 C6.46899,7.46328 6.60442,7.46099 6.68923,7.37618 L7.27308,6.79234 C7.35788,6.70753 7.35997,6.57209 7.27787,6.48979 L4.0115,3.16659 L7.27006,-0.22024 C7.35153,-0.30151 7.34944,-0.43549 7.26547,-0.51967 L6.68746,-1.09747 C6.60349,-1.18144 6.46951,-1.18374 6.38803,-1.10206 L2.87904,2.54486 Z"
                    />
            </svg>
        );
    }
});
