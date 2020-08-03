/*
 * app
 */
define([
    'jquery'
    , 'config'
    // , 'api'
    , 'api.mock'
    , 'index/index-A'
], function ($, config, api, indexA) {
    function initialize() {

      indexA.initialize()

    }

    return {
        initialize: initialize
    }
})
