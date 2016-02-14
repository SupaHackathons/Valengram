var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path')

const PATHS = {
  build: path.join(__dirname, 'build'),
  app: path.join(__dirname, 'src', 'app'),
  server: path.join(__dirname, 'src', 'server'),
  test: path.join(__dirname, 'test')
}

const preLoaders = [
  {
    // Yell at me if there are lint issues
    test: /\.jsx?$/,
    loaders: ['eslint'],
    include: [PATHS.app, PATHS.server, PATHS.test]
  }
]

const loaders = [
  {
    // Lets me use ES6+ in my code!
    test: /\.jsx?$/,
    include: [PATHS.app, PATHS.server],
    loader: 'babel',
    query: {
      presets: ['es2015', 'react', 'stage-1']
    }
  }
]

// Config for serving frontend through webpack
const clientConfig = {
  name: 'client',
  target: 'web',
  devtool: 'eval',  // Helpful for debugging
  entry: path.join(PATHS.app, 'index.js'),
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  resolve: {
    // Automagically figure out the extension in import statements
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: preLoaders,
    loaders: loaders,
  }
}

module.exports = [clientConfig]
