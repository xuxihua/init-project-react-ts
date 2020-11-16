/*
 * @Descripttion: 扩展webpack基本配置
 * @Author: xxh
 * @Date: 2020-11-13 15:34:35
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 11:44:54
 */
// 引入 react-app-rewired 添加 babel 插件的函数
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const path = require("path");
// 关闭打包后sourcemap，防止静态文件夹中会有很多的css和js的map文件产生
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  // 扩展antd配置
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  // 扩展less配置
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" }, // 利用了less-loader的modifyVars来进行主题配置
    },
  }),
  // 扩展支持修饰器
  addDecoratorsLegacy(),
  // 扩展@指令符号
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
  }),
  // 扩展热更新配置
  (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
);
