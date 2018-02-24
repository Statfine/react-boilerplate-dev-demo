// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

// 打包正式环境配置dll
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
// const pkg = require(path.resolve(process.cwd(), 'package.json'));
// const dllPlugin = pkg.dllPlugin;
// const dllPath = path.resolve(process.cwd(), dllPlugin.path || 'node_modules/react-boilerplate-dlls');
// const manifestPath = path.resolve(dllPath, 'reactBoilerplateDeps.json');
// const dlljsPath = path.resolve(dllPath, 'reactBoilerplateDeps.dll.js');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    // remove console.log
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
      },
    }),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // 打包正式环境配置dll
    // new CopyWebpackPlugin([{
    //   context: __dirname,
    //   from: dlljsPath,
    //   to: './',
    // }]),
    // new HtmlWebpackIncludeAssetsPlugin({
    //   assets: ['./reactBoilerplateDeps.dll.js'],
    //   append: false,
    //   hash: true,
    // }),
    // new DllReferencePlugin({
    //   manifest: require(manifestPath), // eslint-disable-line global-require
    // }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,

      AppCache: false,
    }),
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
