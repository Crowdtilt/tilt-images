const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
    displayName: 'FacebookMessengerLogo',

    render() {
        const classes = classnames(
            'tilt-icon',
            'tilt-icon-facebook-messenger-logo',
            this.props.className
        );

        return <svg className={classes} viewBox="0 0 20 18">
            <g stroke="none" strokeWidth="1" fill="none">
                <g className="facebook-messenger-logo-cloud" transform="translate(-777.000000, -584.000000)" fill="#00A0D8">
                    <g id="new-msg-but" transform="translate(768.664153, 576.000000)">
                        <g transform="translate(8.000000, 8.000000)">
                            <path d="M9.98355995,0.888465347 C4.7723126,0.888465347 0.547778406,4.36912406 0.547778406,8.66276746 C0.547778406,11.1093403 1.91989342,13.2916388 4.06421873,14.7167202 L4.06421873,17.6809579 L7.27701444,16.1119483 C8.1344398,16.3230983 9.04279495,16.4370696 9.98355995,16.4370696 C15.1948073,16.4370696 19.4193415,12.9564109 19.4193415,8.66276746 C19.4193415,4.36912406 15.1948073,0.888465347 9.98355995,0.888465347 L9.98355995,0.888465347 Z M10.9212774,11.3578589 L8.51837648,9.07739691 L3.82978938,11.3578589 L8.98723519,6.48596287 L11.4487434,8.76642483 L16.0787232,6.48596287 L10.9212774,11.3578589 L10.9212774,11.3578589 Z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>;
    }
});
