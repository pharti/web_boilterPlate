const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true, // Enable gzip compression
        port: 9000, // Specify a port for the dev server
        hot: true, // Enable Hot Module Replacement
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js', // Ensure a filename pattern
        publicPath: '/', // Ensure the correct public path for the assets
    },
})
