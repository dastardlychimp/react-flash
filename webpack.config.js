const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

const outputPath = __dirname + '/build'

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: outputPath,
        publicPath: '/',
        pathinfo: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-Flash'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(outputPath + '/reactPackages.json'),

        })
        // new GoogleFontsPlugin({
        //     fonts: [
        //         { family: "Roboto", variants: [ "400", "700italic" ] }
        //     ]
        // })
    ],
    devtool: 'eval',
    devServer: {
        contentBase: './build',
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /(\.js$)|(\.jsx$)/,
                exclude: [/node_modules/, /tests/],
                use: [
                    'cache-loader',
                    'babel-loader'
                ]
            }
        ]
    }
}

/*
    react-hot-loader
*/