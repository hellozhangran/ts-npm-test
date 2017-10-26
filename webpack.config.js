var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname + '/test/index.ts'),
    devtool: 'source-map',
    output: {
        path: __dirname + '/test/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './test/tpl/index.html' })
    ]
}
