module.exports = {
    entry: "./scripts/main.entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.min.js"
    },
    externals: {
        "jquery": "jQuery",
        "vue": "Vue"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};