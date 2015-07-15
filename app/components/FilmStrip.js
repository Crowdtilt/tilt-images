const React = require('react');
const classnames = require('classnames');

const FilmStrip = React.createClass({
    displayName: 'FilmStrip',

    render: function() {
        const classes = classnames({
            'tilt-icon': true,
            'tilt-filmstrip': true,
            [this.props.className]: !!this.props.className
        });

        return (
            <svg width="31px" height="31px" viewBox="0 0 31 31" version="1.1">
                <title>filmstrip</title>
                <defs></defs>
                <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-722.000000, -410.000000)" fill="#BBBBBB">
                        <g transform="translate(722.000000, 410.000000)">
                            <path d="M0,0 L0,31 L31,31 L31,0 L0,0 L0,0 Z M27.9,10.85 L24.8,10.85 L24.8,7.75 L27.9,7.75 L27.9,10.85 L27.9,10.85 Z M27.9,4.65 L24.8,4.65 L24.8,1.55 L27.9,1.55 L27.9,4.65 L27.9,4.65 Z M27.9,17.05 L24.8,17.05 L24.8,13.95 L27.9,13.95 L27.9,17.05 L27.9,17.05 Z M12.4,21.7 L12.4,9.3 L21.7,15.5 L12.4,21.7 L12.4,21.7 Z M27.9,23.25 L24.8,23.25 L24.8,20.15 L27.9,20.15 L27.9,23.25 L27.9,23.25 Z M27.9,29.45 L24.8,29.45 L24.8,26.35 L27.9,26.35 L27.9,29.45 L27.9,29.45 Z M6.2,10.85 L3.1,10.85 L3.1,7.75 L6.2,7.75 L6.2,10.85 L6.2,10.85 Z M6.2,4.65 L3.1,4.65 L3.1,1.55 L6.2,1.55 L6.2,4.65 L6.2,4.65 Z M6.2,17.05 L3.1,17.05 L3.1,13.95 L6.2,13.95 L6.2,17.05 L6.2,17.05 Z M6.2,23.25 L3.1,23.25 L3.1,20.15 L6.2,20.15 L6.2,23.25 L6.2,23.25 Z M6.2,29.45 L3.1,29.45 L3.1,26.35 L6.2,26.35 L6.2,29.45 L6.2,29.45 Z"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
});

module.exports = FilmStrip;
