module.exports = {
  entry: {
    elm: './elm.js',
    react: './react.js',
    reactComplete: './react-complete.js',
    preact: './preact.js',
    preactComplete: './preact-complete.js'
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
        test: /complete.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
