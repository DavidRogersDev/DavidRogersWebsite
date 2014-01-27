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
        $scope.blogUrl = 'http://bit.ly/darblog';
        $scope.angularjsUrl = 'http://angularjs.org/';
        $scope.winformsmvpUrl = 'https://winformsmvp.codeplex.com/';
        $scope.localStorageIsSupported = checkLocalStorage();

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

                if ($scope.localStorageIsSupported) {
                    cacheDataFromGitHub('repos', data);
                }

            }), datacontext.getGists().then(function(data) {
                $rootScope.gists = data;

                if ($scope.localStorageIsSupported) {
                    cacheDataFromGitHub('gists', data);
                }

            })]).then(function (data) {
                logSuccess('All Github info for Dave Retrieved', true);
            }, function (error) {

                if ($scope.localStorageIsSupported) {

                    $rootScope.gists = JSON.parse(localStorage.getItem("gists"));
                    $rootScope.repos = JSON.parse(localStorage.getItem("repos"));

                    logSuccess('GitHub data successfully loaded from local storage', true);
                    
                } else {
                    $.ajax({
                        url: '/Api/DarData',
                        dataType: 'json',
                        type: 'GET',
                        contentType: 'application/json; charset=utf-8'
                    }).done(function (data) {
                        
                        $rootScope.gists = data[0];
                        $rootScope.repos = data[1];
                        
                        logSuccess('Cached GitHub data was successfully loaded from a service', true);

                    });
                }
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

    function checkLocalStorage() {
        
        if (Modernizr.localstorage) {
            return true;
        }
        
        return false;
    }
    
})();

