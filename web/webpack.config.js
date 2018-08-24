
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',//'production',
  devtool: "source-map",
  entry: {
    main:'./src/main.tsx',
    admin: './src/main.tsx'
  },
  // watch: true,
  // watchOptions: {
  //   poll: 1000,
  //   ignored: [/node_modules/]
  // },
  output: {
    filename: 'static/js/[id]-[name]-[hash].js',
    path: path.join(__dirname,'dist')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: 'pre', test: /\.tsx?$/, use: "source-map-loader" },
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "less-loader"] }) },
      { test: /\.less$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } }, { loader: 'less-loader', options: { sourceMap: true } } ] }) }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".less"],
    alias: {
      // "@": path.resolve(__dirname,'src/')
    }
  },
  plugins: [
    new ExtractTextPlugin("static/css/[id]-[name]-[hash].css"),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: "src/assets/index.html",
      chunks:['main']
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'admin.html',
      template: "src/assets/index.html",
      chunks:['admin']
    }),
    // new ProgressBarPlugin({
    //   clear: false
    // }),
    new CleanWebpackPlugin(
      [ "dist" ],
      {
        root:path.join(__dirname),
        verbose: false,// true,
        dry: false, 
        watch: false,
        exclude: [ 'files', 'to', 'ignore' ],
        allowExternal: false,
        beforeEmit: false
      }
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),// [path.join(__dirname, '../static'), path.join(__dirname, '../templates')],//path.join(__dirname, '../'),
    compress: true,
    hot: true,
    // hotOnly: true,
    host: '0.0.0.0',
    // disableDotRule: true,
    // historyApiFallback: true,
    headers: {
      'X-Custom-Foo': 'bar'
    },
    // lazy: true,
    // https: false,
    // // https: {
    // //   key: fs.readFileSync('/path/to/server.key'),
    // //   cert: fs.readFileSync('/path/to/server.crt'),
    // //   ca: fs.readFileSync('/path/to/ca.pem'),
    // // },
    // index: 'index.html',
    // info: true,
    // inline: false,
    noInfo: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': 'http://localhost:3000'
    },
    port: 9000
  }
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};