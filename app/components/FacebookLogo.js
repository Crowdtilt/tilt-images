const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
    displayName: 'FacebookLogo',

    render() {
        const classes = classnames(
            'tilt-icon',
            'tilt-icon-facebook-logo',
            this.props.className
        );

        return <svg className={classes} viewBox="0 0 9 17">
            <g stroke="none" strokeWidth="1" fill="none">
                <g className="facebook-logo-f-letter" transform="translate(-931.000000, -585.000000)" fill="#00A0D8">
                    <g transform="translate(898.664153, 576.000000)">
                        <g transform="translate(32.000000, 9.000000)">
                            <path d="M8.19303257,3.48430082 C8.18078558,3.59452373 8.12066399,3.69138629 8.03604842,3.7537346 C7.9380725,3.81385619 7.82784959,3.83835017 7.71762668,3.81385619 C7.26671476,3.71588027 6.69444631,3.65575868 6.29140899,3.65575868 C5.57217666,3.65575868 5.48756109,3.81385619 5.48756109,4.50859455 L5.48756109,5.38592439 L7.79110862,5.38592439 C7.90021817,5.38592439 8.01044108,5.44715934 8.08280966,5.53288827 C8.1562916,5.60525685 8.19303257,5.72772676 8.18078558,5.83683631 L8.03604842,7.83532244 C8.02268807,8.04352127 7.85234357,8.11588985 7.6452581,8.11588985 L5.48756109,8.11588985 L5.48756109,16.2935392 L1.97712834,16.2935392 L1.97712834,8.11588985 L0.820344447,8.11588985 C0.601011986,8.11588985 0.418420495,8.12813684 0.418420495,7.90880438 L0.418420495,5.81345569 C0.418420495,5.59300986 0.601011986,5.38592439 0.820344447,5.38592439 L1.97712834,5.38592439 L1.97712834,4.35049704 C1.97712834,1.90109899 3.2574955,0.70646076 5.7681285,0.70646076 C6.59758375,0.70646076 7.42592563,0.816683672 8.16853859,1.02265578 C8.36337707,1.07164374 8.49809396,1.26648222 8.47359998,1.4613207 L8.19303257,3.48430082 L8.19303257,3.48430082 Z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>;
    }
});
