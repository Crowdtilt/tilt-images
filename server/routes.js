const React = require('react');
const { Route } = require('react-router');
const TiltIcons = require('../app/components');

const App = React.createClass({
  render() {
    const icons = Object.keys(TiltIcons).sort().map(iconName => {
      const Klass = TiltIcons[iconName];
      return [
        <pre>TiltIcons.{iconName}</pre>,
        <Klass />
      ];
    });

    return <div>
      <h1>Hello world</h1>
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
      {icons}
    </div>;
  }
});

module.exports = <Route name="app" path="/" component={App} />;
