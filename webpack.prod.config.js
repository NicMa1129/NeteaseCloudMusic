const babelpolyfill = require("babel-polyfill")
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/main.js'
        ],
      vendor: ['vue', 'vuex', 'vue-router', 'vue-lazyload']
    },
    // devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        publicPath: "/git/NeteaseCloudMusic/dist/",
        // publicPath: "/",
        chunkFilename: "[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: ['.js', '.vue'],
        // 定义引用路径的别名（路径简写）
        alias: {
          views: path.join(__dirname, '/src/views'),
          components: path.join(__dirname, 'src/components')
        }
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [path.join(__dirname, 'src')]
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?importLoaders=1'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=50000&name=[path][name].[ext]'

        }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            inject:'true',
            chunks: ['vendor', 'app'],
            minify:{ //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        }),
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
}