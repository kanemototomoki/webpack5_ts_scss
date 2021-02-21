import path from 'path';

const mode = process.env.NODE_ENV || 'development';

const config = {
  mode,
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 7777,
    hot: true,
  },
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = config;
