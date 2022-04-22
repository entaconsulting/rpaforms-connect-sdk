// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "sample.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blank.html",
      template: "./src/blank.html",
      inject: false,
    }),
  ],
  devServer: {
    compress: true,
    port: 5500,
    open: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
      watch: true,
    },
    watchFiles: {
      paths: ["src/**/*"],
    },
  },
};
