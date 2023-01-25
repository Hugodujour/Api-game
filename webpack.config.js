const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./js/home.js', './js/index.js','./js/pageList.js','./js/pageDetail.js','./js/routes.js', './js/pageNumber.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'css'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
