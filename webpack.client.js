const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  //Tell webpack the root  file or our server application
  entry: "./src/client/client.js",

  // Tell webpack where to put the putput file thatis generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

module.exports = merge(baseConfig, config);
