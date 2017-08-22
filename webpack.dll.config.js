const webpack = require('webpack')

const outputPath = __dirname + '/build'

module.exports = {
    entry: {
        reactPackages: [
            'react',
            'react-dom',
            'redux',
            'react-redux'
        ]
    },
    output: {
        filename: '[name].dll.js',
        path: outputPath
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: outputPath + '/[name].json'
        })
    ]
}