var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'build'),
  app: path.join(__dirname, 'src'),
  client: path.join(__dirname, 'src', 'client'),
  server: path.join(__dirname, 'src', 'server'),
  shared: path.join(__dirname, 'src',  'shared'),
  test: path.join(__dirname, 'test')
}

// Configure css-loader so I can use CSS modules and have somewhat identifable
// hashes for class names to facilitate debugging
const cssLoader = 'css-loader?modules' +
  '&importLoaders=1' +
  '&localIdentName=[name]__[local]___[hash:base64:5]'

module.exports = {
  devtool: 'eval',  // Helpful for debugging
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    path.join(PATHS.app)
  ],
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  resolve: {
    // Automagically figure out the extension in import statements
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, './src/shared/'),
      path.resolve(__dirname, './src/shared/components/')
    ]
  },
  module: {
    preLoaders: [
      {
        // Yell at me if there are lint issues
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [PATHS.app, PATHS.server, PATHS.test, PATHS.client, PATHS.shared]
      }
    ],
    loaders: [
      {
        // Lets me use ES6+ in my code!
        test: /\.jsx?$/,
        include: [PATHS.app, PATHS.server, PATHS.test, PATHS.client, PATHS.shared],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        // Let me use CSS modules!
        test: /\.css$/,
        include: PATHS.app,
        loader: ExtractTextPlugin.extract('style-loader', cssLoader)
      }
    ]
  },
  plugins: [
    // Bundle-up my css and output into one file
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }
};
