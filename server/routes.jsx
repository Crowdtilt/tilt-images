'use strict';

var React = require('react'),
    Router = require('react-router'),
    TiltIcons = require("../app"),
    Route = Router.Route;

var App = React.createClass({
    render: function() {
        return <div>
            <h1>Hello world</h1>
            <TiltIcons.TiltLogoImage size={100} />
            <TiltIcons.TiltLogoTextImage size={100} />
            <TiltIcons.PaperAirplaneImage width={200} height={200} />
            <TiltIcons.ChevronDownIcon width={100} height={100} />
            <TiltIcons.Triangle width={100} height={80} />

            <TiltIcons.PermissionFriends />
            <TiltIcons.PermissionEmailEnvelope />
            <div className="advanced-options">
                <TiltIcons.Clipboard />
                <TiltIcons.EnvelopeOpened />
                <TiltIcons.OneLeft />
                <TiltIcons.Options />
                <TiltIcons.UsersTwo />
                <TiltIcons.Gift />
            </div>
        </div>;
    }
});

module.exports = (
    <Route name="app" path="/" handler={App} />
);
