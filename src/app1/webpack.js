const path = require("path");
const oldConfig = require("../../config/webpack.js");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const iPath = path.join(__dirname, "src");
const oPath = path.join(__dirname, "dist");
const fs = require("fs");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(iPath, "index.tpl.html"),
  filename: path.join(oPath, "index.html")
});
const output = {
  path: oPath,
  filename: "index.js"
};
const opt = {
  optimization: {
    minimize: false
  }
};
const config = {
  ...oldConfig,
  output,
  entry: path.join(iPath, "index.js"),
  ...opt
};
config.plugins.push(htmlPlugin);
module.exports = config;
