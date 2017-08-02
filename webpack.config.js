const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/build'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-Flash'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        hot: true
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
                loader: 'babel-loader'
            }
        ]
    }
}

/*
    react-hot-loader
*/