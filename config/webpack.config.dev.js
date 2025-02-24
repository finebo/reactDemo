'use strict';

const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件
const base = require('./webpack.config.js'); // 引入webpack.config.js

module.exports = merge(base, { // 将webpack.config.js合并到当前文件
    devtool: "source-map", // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度（主要用于提示错误信息）
    plugins: [
        new CleanWebpackPlugin()  // 所要清理的文件夹名称
    ]
})