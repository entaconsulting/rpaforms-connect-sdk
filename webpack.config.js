// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  entry: "./src/sample/index.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: { configFile: "tsconfig.webpack.json" },
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
};
