var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path')

const PATHS = {
  build: path.join(__dirname, 'build'),
  app: path.join(__dirname, 'src', 'app'),
  server: path.join(__dirname, 'src', 'server'),
  test: path.join(__dirname, 'test')
}

// Configure css-loader `111 1111    1111    1  1 1 ``````1 1 1               1so I can use CSS modules and have somewhat identifable
// hashes for class names to facilitate debugging
const cssLoader = 'css-loader?modules' + '&importLoaders=1' + '&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'

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
  },
  {
    // Let me use CSS modules!
    test: /\.css$/,
    include: PATHS.app,
    loader: ExtractTextPlugin.extract('style-loader', cssLoader)
  },
  //{ test: /\.css$/, loader: "style-loader!css-loader?root=." },
  //{ test: /\.png$/, loader: "url-loader?limit=100000" },
  //{ test: /\.jpg$/, loader: "file-loader" }
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
  },
  plugins: [
    // Bundle-up my css and output into one file
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}

// Config for serving frontend throug node
const serverConfig = {
  name: 'server',
  target: 'node',
  context: PATHS.app,
  entry: {
    app: path.join(PATHS.app, 'components', 'App.jsx')
  },
  output: {
    path: path.join(PATHS.build, 'generated'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  resolve: {
    // Automagically figure out the extension in import statements
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: preLoaders,
    loaders: loaders,
  },
  plugins: [
    // Output CSS into multiple files
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = [clientConfig, serverConfig]
