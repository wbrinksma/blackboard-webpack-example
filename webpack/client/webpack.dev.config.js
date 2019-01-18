const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, '../../src'),
    entry: './client.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../../dist/client'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "../public/client/index.html",
            hash: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../../dist/client'),
        compress: true,
        port: 9000,
        https: true
    }
}
