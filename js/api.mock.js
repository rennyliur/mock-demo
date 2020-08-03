define(['config', 'http://mockjs.com/dist/mock.js'], function (config, Mock) {
    var API = {
        url_index_A: config.CONFIG.baseUrl + config.CONFIG.path + '/index/indexA'
    };

    Mock.mock(API.url_index_A, {
            'list|1-10': [{
                'id|+1': 1,
                'name|1-5': '※',
                'status|1': true,
                'regexp': /[a-z][A-Z][0-9]/,
                'email': '@EMAIL',
                'ip': '@ip',
                'Web': '@url',
                'Helper': '@pick(["h","e","l","l","o"])',
                'Miscellaneous': '@guid'
            }]
        })

    return {
        API: API
    }
})

