import webpackCommon from "./webpack.common.js";
import { merge } from "webpack-merge";

export default merge(webpackCommon, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
});
