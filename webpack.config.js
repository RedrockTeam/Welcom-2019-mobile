const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.pro.js');
const HtmlWepackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const commonConfig = {
    entry: './src/index.js',
/*     output:{
        filename:'main.js',
        path:path.resolve(__dirname , 'dist')
    }, */
    devServer:{
        contentBase:'./dist',
        hot:true,
        port:8000,
        open:false,
        proxy:{
            '/api' : 'http//localhost:80'
        }
    },
     plugins:[
        new HtmlWepackPlugin({
            template:'public/index.html',
        }),
        new VueLoaderPlugin(),
    ], 
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:'babel-loader',
            },
            {
                //解析vue-preview
                test:/vue-preview.src.*?js$/,
                use:'babel-loader',
            },
            {
                test:/\.vue$/,
                use:'vue-loader',
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        name:"[name].[ext]",
                        limit:8192,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test:/.html$/,
                use:[{
                    loader:'html-withimg-loader'
                }]
            },
            {
                test:/\.(mp4)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'video/'
                    }
                    
                }]
            },
            {
                test:/\.(woff2?|eot|ttf|otf)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    }

}

module.exports = (env) => {
    if(env && env.production) {
        return merge(commonConfig, prodConfig);
    } else {
        return merge(commonConfig, devConfig);
    }
}