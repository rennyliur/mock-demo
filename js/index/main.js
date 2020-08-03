/*
 * main
 */
// 配置
require.config({
    baseUrl: 'js/'
  , shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      deps: ['jquery'],
      exports: '_'
    }
  }
  , paths: {
    'jquery': 'libs/jquery',
    'underscore': 'libs/underscore'
  }
  , waitSeconds: 0
})

// 初始化
require(['index/app'], function (app) {
  new app.initialize()
})
