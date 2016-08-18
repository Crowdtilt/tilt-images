import React from 'react';
import { Route } from 'react-router';
import TiltIcons from '../app/components';

const App = React.createClass({
  render() {
    const icons = Object.keys(TiltIcons).sort().map(iconName => {
      const Klass = TiltIcons[iconName];
      return [
        <pre>TiltIcons.{iconName}</pre>,
        <Klass />,
      ];
    });

    return <div>
      <h1>Hello world</h1>

      <h3>Parameterized Chevron Icons:</h3>
      <pre>TiltIcons.ChevronIcon rotation=90</pre>
      <TiltIcons.ChevronIcon rotation={90} />
      <pre>TiltIcons.ChevronIcon rotation=180</pre>
      <TiltIcons.ChevronIcon rotation={180} />
      <pre>TiltIcons.ChevronIcon rotation=-90</pre>
      <TiltIcons.ChevronIcon rotation={-90} />

      <h3>Parameterized GroupCircled Icons:</h3>
      <pre>TiltIcons.GroupCircled isLocked=false</pre>
      <TiltIcons.GroupCircled isLocked={false} />
      <pre>TiltIcons.GroupCircled isLocked=true</pre>
      <TiltIcons.GroupCircled isLocked={true} />
      <pre>TiltIcons.GroupCircled isLocked=false className="solid"</pre>
      <TiltIcons.GroupCircled isLocked={false} className="solid"/>
      <pre>TiltIcons.GroupCircled isLocked=true className="solid"</pre>
      <TiltIcons.GroupCircled isLocked={true} className="solid"/>

      <h3>Component List:</h3>
      {icons}
    </div>;
  },
});

module.exports = <Route name="app" path="/" component={App} />;
