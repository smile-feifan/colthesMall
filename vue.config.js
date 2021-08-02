//进行导出后，会自动和隐藏起来的公共配置进行合并
//configureWebpack:{}表示准备配置webpack中的configure
//alias->别名
//默认会有一个别名配置 -> 'src':'@'
module.exports = {
  configureWebpack: {
   resolve: {
     alias: {
       'assets': '@/assets',
       'common': '@/common',
       'components': '@/components',
       'network': '@/network',
       'views': '@/views',
     }
   }
  }
  }