const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
         
        }
      
    ],
  }, 
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
   
  ],
  
 };
