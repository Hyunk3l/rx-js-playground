var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};