(function() {
    'use strict';

    var serviceId = 'datacontext';
    angular.module(clientConstants.appName).factory(serviceId, ['$q', 'config', 'entityManagerFactory', datacontext]);

    function datacontext($q, config, entityManagerFactory) {
        var EntityQuery = breeze.EntityQuery;
        //var getLogFn = common.logger.getLogFn;
        //var log = getLogFn(serviceId);
        //var logError = getLogFn(serviceId, 'error');
        //var logSuccess = getLogFn(serviceId, 'success');
        var manager = entityManagerFactory.newManager();
        var primePromise;

        var service = {
            getRepositories: getRepositories,
            getGists: getGists
        };

        return service;

        function getRepositories() {
            var orderBy = 'name';

//            return $q.when([]);
            return EntityQuery.from('repos')
                .orderBy(orderBy)
                .using(manager).execute()
                .to$q(querySucceeded, _queryFailed);

            function querySucceeded(data) {
                var repositories = data.results;
                //log('Retrieved [Session Partials] from remote data source', sessions.length, true);
                return repositories;
            }
        }

        function getGists() {
            //return $.when(['hi', 'dave']);
            return EntityQuery.from('gists')
                .using(manager).execute()
                .to$q(querySucceeded, _queryFailed);

            function querySucceeded(data) {
                var gists = data.results;
                //log('Retrieved [Session Partials] from remote data source', sessions.length, true);
                return gists;
            }
        }
        
        function _queryFailed(error) {
            var msg = config.appErrorPrefix + 'Error retreiving data.' + error.message;
            //logError(msg, error);
            throw error;
        }
    }
    
})();