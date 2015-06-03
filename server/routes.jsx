'use strict';

var React = require('react'),
    Router = require('react-router'),
    TiltIcons = require("../app"),
    Route = Router.Route;

var App = React.createClass({
    render: function() {
        const icons = [];
        for (var iconName in TiltIcons) {
            let Klass = TiltIcons[iconName],
                markup = <div key={"icon-" + iconName}>
                    <pre>TiltIcons.{iconName}</pre>
                    <Klass />
                </div>
            icons.push(markup);
        }

        return <div>
            <h1>Hello world</h1>
            {icons}
        </div>;
    }
});

module.exports = <Route name="app" path="/" handler={App} />;
