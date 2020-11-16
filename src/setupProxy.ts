/*
 * @Descripttion: 设置代理
 * @Author: xxh
 * @Date: 2020-11-13 15:36:20
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-13 15:38:33
 */
// @ts-ignore 
const { createProxyMiddleware } = require("http-proxy-middleware");

console.log(createProxyMiddleware);
module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};