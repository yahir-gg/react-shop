//donde vamos a trabajar
const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    //punto de entrada de nuestra app
    entry: './src/index.js',
    output:{
        path: resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    mode: "development",
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}
