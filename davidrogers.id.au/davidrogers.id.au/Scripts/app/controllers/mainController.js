(function() {
    'use strict';

    var controllerId = 'MainController';
    
    var darApp = angular.module(clientConstants.appName);

    darApp.controller(controllerId, ['$timeout', '$q', '$rootScope', '$scope', '$location', 'config', 'datacontext', 'entityManagerFactory', 'logger', mainController]);

    function mainController($timeout, $q, $rootScope, $scope, $location, config, datacontext, entityManagerFactory, logger) {

        var log = logger.getLogFn(controllerId);
        var logWarning = logger.getLogFn(controllerId, 'warn');
        var logSuccess = logger.getLogFn(controllerId, 'success');

        $scope.mainTitle = 'Home';
        $scope.blogUrl = 'http://davidrogers.id.au/wp';
        $scope.angularjsUrl = 'http://angularjs.org/';
        $scope.winformsmvpUrl = 'https://winformsmvp.codeplex.com/';

        $scope.goToProjects = function () {
            $location.replace();
            $location.url('/projects');
        };
        
        $scope.goToGithub = function () {
            $location.replace();
            $location.url('/gitHub');
        };

        $scope.backHome = function () {
            $location.replace();
            $location.url('/home');
        };

        $scope.goToArticles = function () {
            $location.replace();
            $location.url('/articles');
        };
        
        $scope.goToContact = function () {
            $location.replace();
            $location.url('/contact');
        };

        $scope.goToBlog = function () {
            //$location.replace();
            window.location.assign($scope.blogUrl);
        };

        if (!$rootScope.repos) {

            $q.all([datacontext.getRepositories().then(function (data) {
                
                $rootScope.repos = data;

                cacheDataFromGitHub('repos', data);

            }), datacontext.getGists().then(function(data) {
                $rootScope.gists = data;
                
                cacheDataFromGitHub('gists', data);
                
            })]).then(function (data) {
                log('All Github info for Dave Retrieved', true);
            }, function (error) {

                logWarning('GitHub service not available. Attempting to load from local storage', true);

                $rootScope.gists = JSON.parse(localStorage.getItem("gists"));
                $rootScope.repos = JSON.parse(localStorage.getItem("repos"));

                $timeout(logSuccess('GitHub data successfully loaded from local storage', true), 20000);


            });
        }
        
        $location.replace();
        $location.url('/home');
    }

    function cacheDataFromGitHub(type, data) {

        if (localStorage.getItem(type) === null) {
            localStorage.setItem(type, JSON.stringify(data));
        }
    }
    
})();

