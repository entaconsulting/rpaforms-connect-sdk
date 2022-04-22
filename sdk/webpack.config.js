// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  entry: "./src/rpaforms-connect-sdk.ts",
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
    filename: "rpaforms-connect-sdk.js",
    path: path.resolve(__dirname, "dist"),
    library: "rpaFormsConnectSdk",
    libraryTarget: "umd",
  },
};
