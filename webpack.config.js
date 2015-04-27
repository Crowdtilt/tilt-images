module.exports = {
    target: "web",
    entry: {
        'tilt-images': './app/index.js'
    },
    output: {
        path: require('path').resolve('./assets'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader' },
        ]
    },
    plugins: []
};

