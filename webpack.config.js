var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    target: "web",
    entry: {
        'tilt-images': './app/index.js',
        'stylesheets': './app/stylesheets.js'
    },
    output: {
        path: require('path').resolve('./assets'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader' },
            { test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                  'style-loader',
                  'css-loader!sass-loader?outputStyle=expanded'
              ) }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
