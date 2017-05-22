module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: '../backend/public',
    publicPath: '.',
    filename: 'bundle2.js'
  },
  module: {
  
    loaders: [{
      exclude: [/node_modules/],
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
