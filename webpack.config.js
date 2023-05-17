const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    myKey: "./src/myKey.js",
    mainDOM: "./src/mainDOM.js",
    forecastDOM: "./src/forecastDOM.js",
    weatherChance: "./src/weatherChance",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather app",
      template: "./src/index.html",
      favicon: "./src/Icons/cloud-icon.png",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
