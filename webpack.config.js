var webpack = require('webpack');

module.exports = {
    entry: "./scripts/main.entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    externals: {
        "jquery": "jQuery",
        "vue": "Vue"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
};