const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const devtool = mode === 'development' ? 'eval-cheap-source-map' : false;
const stats = mode === 'development' ? 'errors-warnings' : { children: false };

module.exports = {
  mode: mode,
  devtool: devtool,
  entry: glob.sync('./_dev/js/**/*.js').reduce((acc, path) => {
    const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: './assets/bundle.[name].js',
    path: path.resolve(__dirname, './')
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, '_dev/styles/'),
      Helpers: path.resolve(__dirname, '_dev/styles/helpers/'),
      Components: path.resolve(__dirname, '_dev/styles/components/'),
      Sections: path.resolve(__dirname, '_dev/styles/sections/')
    }
  },
  optimization: {
    minimize: mode === 'production',
    minimizer: [
      new TerserPlugin({
        extractComments: mode === 'development',
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          compress: {
            drop_console: mode === 'production',
            warnings: false
          }
        }
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {removeAll: mode === 'production'}
            }
          ]
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/bundle.[name].css',
    })
  ],
  stats: stats,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            }
          }
        ]
      }
    ]
  }
}