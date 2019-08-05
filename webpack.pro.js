const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].[contenthash].js'
    },
    module:{
        rules:[{
            text:/\.css$/,
            use:[{
                loader: MiniCssExtractPlugin.loader,
                options:{
                    publicPath:'../'
                }
            },
            'css-loader',
            {
                loader:'px2rem-loader',
                 options:{
                     remUint: 75,
                     remPrecision: 8
                 }
            },
        ]
        }]
    },
    optimization:{
        minimizer:[new OptimizeCSSAssetsPlugin({})],

    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css'
        }),
        new CleanWebpackPlugin()
    ]
}