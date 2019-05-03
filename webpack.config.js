const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`), // eslint-disable-line
  },
  devServer: {
    contentBase: path.join(__dirname, `public`), // eslint-disable-line
    hot: true,
    compress: false,
    port: 8084,
  },
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
};
