const path = require("path");

module.exports = {
    target: "web",
    entry: {
        'tilt-images': ['./app/index.js', "stylesheets"]
    },
    output: {
        path: require('path').resolve('./assets'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".css"],
        modulesDirectories: ["app", "node_modules"],
    },
};
