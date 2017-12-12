var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        PalEngine: "./src/PalEngine.ts"
    },

    output: {
        path: path.join(__dirname, "../builds"),
        filename: "[Name].min.js",
        library: ["[name]"],
        libraryTarget: "umd"
    },
    externals: {
        "P": "Pan"
    },

    resolve: {
        modules: [
            "node_modules"
          ],
        extensions: ['.ts', '.tsx', '.js']
    },


    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: "babel-loader?presets[]=es2015!ts-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },

    plugins:[
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};