
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'production',//'production',
  devtool: "source-map",
  entry: {
    main:'./src/main.tsx',
    admin: './src/main.tsx'
  },
  output: {
    filename: 'static/js/[id]-[name]-[hash].js',
    path: path.join(__dirname,'../')
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
      filename: 'templates/index.html',
      template: "src/assets/index.html",
      chunks:['main']
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'templates/admin.html',
      template: "src/assets/index.html",
      chunks:['admin']
    }),
    new ProgressBarPlugin({
      clear: true
    }),
    new CleanWebpackPlugin(
      [
        "static/js",
        "static/css",
        "templates"
      ],
      {
        root:path.join(__dirname,'../'),
        verbose: true,// true,
        dry: false, 
        watch: false,
        exclude: [ 'files', 'to', 'ignore' ],
        allowExternal: false,
        beforeEmit: false
      }
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'"
    })
  ]
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};