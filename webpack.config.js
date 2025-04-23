const clearBuildPlugin = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    plugins: [
        new clearBuildPlugin.CleanWebpackPlugin(),
        new MomentLocalesPlugin({
            localesToKeep: ['zh-cn', 'zh-hk', 'zh-mo', 'zh-tw']
        })
    ]
}
