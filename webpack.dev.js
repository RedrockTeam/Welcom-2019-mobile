module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader:'px2rem-loader',
                         options:{
                             remUint: 75,
                             remPrecision: 8
                         }
                    },
                ]
            }
        ]
    },
}