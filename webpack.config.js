const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV

module.exports = (env, argv) => {
  const is_prod = argv.mode === 'production';
  
  return {
    entry: {
      main: ['./src/js/src/orange.js', './src/scss/src/styles.scss'],
    },
    output: {
      filename: is_prod ? 'js/orange.min.js' : 'js/orange.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/dist"
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: {
            loader: 'eslint-loader',
            options: {
              configFile: __dirname + '/.eslintrc'
            },
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: is_prod ? {
                  path: __dirname + '/postcss.config.js'
                } : {}
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath: '../fonts/',
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: is_prod ? 'css/orange.min.css' : 'css/orange.css'
      }),
    ],
  }
};