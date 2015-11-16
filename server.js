const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const express = require('express');
const proxy = require('proxy-middleware');
const url = require('url');
const { match, RoutingContext } = require('react-router');
const routes = require('./server/routes');
const React = require('react');
const { renderToString } = require('react-dom/server');

const app = express();

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
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const content = renderToString(<RoutingContext {...renderProps} />);
      res.render('index.ejs', {content: content});
    } else {
      res.send(404, 'Not found')
    }
  });
});

app.listen(7001, function() {
    console.info('Express server listening on 7001');
});
