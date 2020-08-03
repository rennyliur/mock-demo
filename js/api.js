define(['config', 'http://mockjs.com/dist/mock.js'], function (config, Mock) {
    var API = {
        url_index_A: config.CONFIG.baseUrl + config.CONFIG.path + '/basedata/getBanner',
        url_index_B: config.CONFIG.baseUrl + config.CONFIG.path + '/basedata/getEnRegistCards',
    };

    return {
        API: API
    }
})

