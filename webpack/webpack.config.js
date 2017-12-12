var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        PalEngine: "./src/PalEngine.ts"
    },

    output: {
        path: path.join(__dirname, "../builds"),
        filename: "[name].js",
        library: ["[name]"],
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /(\.js$|\.ts(x?)$)/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ]
            }
        ]
    }
};