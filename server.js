const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackDevServer = require('webpack-dev-server');
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

app.use('/assets', proxy(url.parse('http://localhost:7002/assets')));
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

const server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname,
  publicPath: '/assets/',
  quiet: true,
  stats: { colors: true }
});

server.listen(7002, 'localhost', function() {
  console.info('Webpack server listening on 7002');
});

app.listen(7001, function() {
    console.info('Express server listening on 7001');
});
