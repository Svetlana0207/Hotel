
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 entry: {
     main:'./src/Headers&Footers.js'
 },
 output:{
     filename:'[name].js',
     path: path.resolve(__dirname, 'dist'),
     assetModuleFilename: 'assets/[hash][ext][query]'
    
 },
 devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,

 },
 module: {
     rules:[{
         test: /\.css$/,
         use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          
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
  test: /\.(png|jpg|gif|svg)$/i,
  type: 'asset/resource',
  exclude: /fonts/,

},
]
 },
 plugins: [
     new MiniCssExtractPlugin({
         filename: "[name].css"
     }),
     new HtmlWebpackPlugin({
        title: 'Title',
        template: 'src/pages/Headers&Footers.pug'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "fonts.css"),
            to:path.resolve(__dirname, 'dist/fonts.css')
          },
          {
            from: path.resolve(__dirname, "reset.css"),
            to:path.resolve(__dirname, 'dist/reset.css')
          },
          {
              from:path.resolve(__dirname,'fonts'),
              to:path.resolve(__dirname,'dist/fonts')
          }
        ],
      }),
 ],
}