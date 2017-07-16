webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: '[name]'
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1', 'react-hmre']
                }
            },
            {
                test: /\.sass$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: __dirname + '/src'
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ],
    },
    devServer: {
        host: '0.0.0.0',
        port: '1999',
        disableHostCheck: true
    }
};
