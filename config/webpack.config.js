const path = require('path');//node.js中的原生模块
const HtmlWebpackPlugin = require('html-webpack-plugin');//按照模板生成html并且引入相关文件资源
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//将css抽离出来，并且引入在html文件中
const outputPath = path.resolve(__dirname,'../server');
const devMode = process.env.NODE_ENV !== 'production';
const util = require('./util');

module.exports = {
    entry: util.getEntries(),
    output: {
        filename: devMode ? 'js/[name].js' : 'js/[name].[hash].js',
        path: path.resolve(outputPath,'static')
    },
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                enforce: true,
                priority: 100,
                minChunks: 1,
                chunks: 'all'
              },
            },
          },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
        }),
    ],
    performance:{
        hints: "warning",
        maxAssetSize: 300000000,
        maxEntrypointSize: 5000000000,
        assetFilter: function(assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
            
            }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            { test: /\.css$/, use: [ MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 80,
                            name:'static/images/[name].[ext]',
                            publicPath:'/'
                        }
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', 
                    },
                ],
            },
        ]
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: 'localhost',
        port: 3000,
        open: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.less']
    }
}