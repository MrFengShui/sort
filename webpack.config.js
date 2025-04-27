
const clearBuildPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    devServer: {
        compress: true,
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new clearBuildPlugin.CleanWebpackPlugin(),
        new CompressionPlugin(),
        new MomentLocalesPlugin({
            localesToKeep: ['zh-cn', 'zh-hk', 'zh-mo', 'zh-tw']
        })
    ]
}
