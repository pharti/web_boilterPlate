import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import config from './webpack.config'
import { merge } from 'webpack-merge'

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.join(__dirname, 'public'),
    },
    plugins: [new CleanWebpackPlugin()],
})
