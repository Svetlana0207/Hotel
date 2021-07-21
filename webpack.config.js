
const webpack = require('webpack')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 entry: {
     app:'./src/Colors&Type.js'
 },
 output:{
     filename:'[name].js',
     path: path.resolve(__dirname, './dist'),

 },
 devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
 },
 module: {
     rules:[{
         test: /\.css$/,
         use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                },
              },
             "css-loader"
         ]
     },
     {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                },
              },
            {
                loader: 'css-loader',
                options: {sourceMap:true}

            },{
                loader: 'sass-loader',
                options: {sourceMap:true}
            }
        ]
    },
{test: /\.pug$/, use: 'pug-loader'},
{
    test: /\.(png|jpe?g|gif|svg)$/i,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
]
 },
//  devServer:{
//      overlay: true
//  },
 plugins: [
     new MiniCssExtractPlugin({
         filename: "[name].css"
     }),
     new HtmlWebpackPlugin({
        title: 'Title',
        template: 'src/pages/Colors&Type.pug'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
 ],
}