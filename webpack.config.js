const clearBuildPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new clearBuildPlugin.CleanWebpackPlugin()
    ]
}
