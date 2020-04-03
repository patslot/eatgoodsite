var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public/assets/'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: extractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: false,
                                sourceMap: false 
                            }
                        }, 
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
                loader: "url-loader?limit=100000"
            }
        ]
    },
    watch: true, 
    plugins: [
        extractPlugin,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};