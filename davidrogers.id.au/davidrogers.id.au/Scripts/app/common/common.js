(function() {
    'use strict';

    // Define the common module 
    // Contains services:
    //  - common
    //  - logger
    //  - spinner
    var commonModule = angular.module('common', []);
    
    // Must configure the common service and set its 
    // events via the commonConfigProvider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: '',
            //spinnerToggleEvent: ''
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common', ['$q', '$rootScope', '$timeout', 'commonConfig', 'logger', common]);

    function common($q, $rootScope, $timeout, commonConfig, logger) {
        
        var service = {
            // common angular dependencies
            $q: $q,
        };

        return service;
    }

})();