const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  outputDir: 'dist', 
  // 环境判断
  // outputDir: process.env.NODE_ENV == 'production'?'dist':'test',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  publicPath:'./',
  css: {  
    loaderOptions: {
      postcss: {  
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 27.5,
            propList: ['*']
          })
        ]  
      }
    }
  },
  //设置别名
  //代理
  devServer: {
    proxy: {
        '/api': {  
            // 此处的写法，目的是为了 将 /api 替换成 http://api.douban.com/v2
            target: 'http://api.zhinengshe.com/10001-you163',
            // 允许跨域
            changeOrigin: true,    
            pathRewrite: {      
                '^/api': ''  
            }
        }
      }
}
};
