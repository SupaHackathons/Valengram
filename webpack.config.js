var path = require('path'); // This is a node api that returns us a concatenated path

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader', // equivalent to 'babel'
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // Allows us to require('file') rather than require('file.js')
    extensions: ['', '.js', '.jsx']
  }
};
