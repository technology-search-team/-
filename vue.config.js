module.exports = {
      devServer: {
        proxy: {
          "/": {
            // search为转发路径
            target: "http://172.16.9.137:8082", // 目标地址-测试环境
    //         target: "http://172.16.10.8:8012", // 目标地址-测试环境
            ws: true, // 是否代理websockets
            changeOrigin: true, // 设置同源 默认false，是否需要改变原始主机头为目标URL,
            pathRewrite: {
              // 这里重写路径，如果monitor本身不存在接口路径中，一定要写成空！！！
              "^/": ""
            }
          }
    //      http://172.16.9.137:8080                             2
    //      http://172.16.9.115:8080                                        3
    // http://172.16.9.162:8081                                             1
        }                  
      }
    }