'use strict';

require('node-jsx').install({extension: '.jsx'});
require('babel/register');

var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    config = require('./webpack.config'),
    express = require('express'),
    proxy = require('proxy-middleware'),
    url = require('url'),
    Router = require('react-router'),
    routes = require('./server/routes'),
    React = require('react');

var app = express();

app.use('/favicon.ico', function(req,res) {
    res.sendStatus(404);
});

app.use(webpackDevMiddleware(webpack(config), {
    contentBase: __dirname,
    publicPath: '/assets/',
    quiet: true,
    stats: { colors: true }
}));

app.set('views', __dirname + '/server/views');
app.use(function(req, res){
    Router.run(routes, req.url, function(Handler){
        var content = React.renderToString(React.createElement(Handler));
        res.render('index.ejs', {content: content});
    });
});

app.listen(7001, function() {
    console.info('Express server listening on 7001');
});
