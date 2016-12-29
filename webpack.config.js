module.exports = {
  entry: {
    react: './react.js',
    elm: './elm.js',
    reactComplete: './react-complete.js'
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack-loader'
      },
      {
        test: /react-complete.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
