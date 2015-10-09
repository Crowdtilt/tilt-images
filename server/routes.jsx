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

            <div>
                <pre>TiltIcons.ChevronIcon rotation=90</pre>
                <TiltIcons.ChevronIcon rotation={90} />
                <pre>TiltIcons.ChevronIcon rotation=180</pre>
                <TiltIcons.ChevronIcon rotation={180} />
                <pre>TiltIcons.ChevronIcon rotation=-90</pre>
                <TiltIcons.ChevronIcon rotation={-90} />
                <pre>TiltIcons.GroupCircled isLocked=false</pre>
                <TiltIcons.GroupCircled isLocked={false} />
                <pre>TiltIcons.GroupCircled isLocked=true</pre>
                <TiltIcons.GroupCircled isLocked={true} />
            </div>
            {icons}
        </div>;
    }
});

module.exports = <Route name="app" path="/" handler={App} />;
