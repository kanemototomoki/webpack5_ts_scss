import path from 'path';

const mode = process.env.NODE_ENV || 'development';

const config = {
  mode: mode,
  entry: './src/js/main.ts',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 7777,
    hot: true,
    watchOptions: {
      aggregateTimeout: 500,
      ignored: /node_modules/,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // For pure CSS - /\.css$/i,
        // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
        // For Less - /\.((c|le)ss)$/i,
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
              // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: ['web','es5'],
};

module.exports = config;
