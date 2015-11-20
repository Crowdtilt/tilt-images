const Routes = require('./routes');
const React = require('react');
const ReactDOM = require('react-dom');
const { Router } = require('react-router');

ReactDOM.render(<Router>{Routes}</Router>, document.getElementById('app'));
