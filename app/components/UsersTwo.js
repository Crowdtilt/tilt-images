const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
    displayName: 'UsersTwo',

    render: function() {
        const classes = classnames({
            'tilt-icon': true,
            'tilt-icon-users-two': true,
            [this.props.className]: !!this.props.className
        });
        return <svg version="1.1" {...this.props} className={classes} id="Layer_1" x="0px" y="0px" viewBox="-1 -7 41 41" enableBackground="new -1 -7 41 41">
            <g id="Page-1">
                <g id="Artboard-10-Copy" transform="translate(-1.000000, -412.000000)">
                    <g id="users-two" transform="translate(0.000000, 405.000000)">
                        <rect id="Rectangle-156" fill="#D8D8D8" fillOpacity="0" width="41" height="41">
                        </rect>
                        <g id="group" transform="translate(1.000000, 7.342105)">
                            <g id="Group" transform="translate(20.183066, 0.000000)">
                                <g id="Shape" transform="translate(0.000000, 15.652174)">
                                    <path fill="#00A0D8" d="M6.8,0C4.2,0,2.1,0.7,0.5,1.6C2.9,3.7,4,6.1,4.2,6.3l0.2,0.3v3.8h13.9V7C18.1,7,15.3,0,6.8,0L6.8,0z"
                                        />
                                </g>
                                <g id="Oval" transform="translate(0.686499, 0.000000)">
                                    <ellipse fill="#00A0D8" cx="6.1" cy="6.1" rx="6.1" ry="6.1"/>
                                </g>
                            </g>
                            <g id="Group_1_">
                                <path id="Shape_1_" fill="#00A0D8" d="M5.2,6.1C5.2,2.8,8,0,11.3,0s6.1,2.8,6.1,6.1s-2.8,6.1-6.1,6.1S5.2,9.4,5.2,6.1L5.2,6.1z
                                     M11.3,15.7c-8.5,0-11.3,7-11.3,7v3.5h22.6v-3.5C22.6,22.6,19.8,15.7,11.3,15.7L11.3,15.7z"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>;
    }
})
