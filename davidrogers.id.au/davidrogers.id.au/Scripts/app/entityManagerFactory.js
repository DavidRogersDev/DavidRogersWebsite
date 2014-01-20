(function () {
    'use strict';

    var serviceId = 'entityManagerFactory';

    var darApp = angular.module('darApp');

    darApp.factory(serviceId, ['config', emFactory]);

    function emFactory(config) {
        
        breeze.config.initializeAdapterInstance('modelLibrary', 'backingStore', true);
        breeze.NamingConvention.camelCase.setAsDefault();

        var serviceName = config.remoteServiceName;

        var dataService = new breeze.DataService({
            serviceName: serviceName,
            hasServerMetadata: false,
        });

        var provider = {
            newManager: newManager
        };

        return provider;

        function newManager() {
            var manager = new breeze.EntityManager({
                dataService: dataService,
            });
            return manager;
        }
    }
})();