/*
 * index-A
 */
define(['jquery', 'api', 'underscore'], function ($, api, _) {
    var mod = $('#J-index-A')
      , _api = api.API;

    function init() {

      // 发送Ajax请求
      $.ajax({
        url: _api.url_index_A,
        dataType: 'json',
        timeout: 8000,
        async: false,
        success: function (res) {
          console.log('success A');
          console.log(res)
          if (res.status) {
            console.log(res.data)

            // 模板渲染
            var compiled = _.template($('#J-temp-index-A').html());
            mod.html(compiled(res.data));
          }
        },
        error: function (err) {
          console.log('error A');
        }
      })
    }

    return {
        initialize: function () {
            if (!mod.length) return
            init()
        }
    }
})
