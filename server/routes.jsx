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
            <TiltIcons.PaperAirplaneImage size={200} />
        </div>;
    }
});

module.exports = (
    <Route name="app" path="/" handler={App} />
);
