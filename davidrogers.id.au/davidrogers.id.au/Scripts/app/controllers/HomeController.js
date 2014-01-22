(function() {
    'use strict';

    var controllerId = 'HomeController';
    
    var darApp = angular.module(clientConstants.appName);

    darApp.controller(controllerId, ['$q', '$rootScope', '$scope', '$location', 'config', 'entityManagerFactory', 'logger', homeController]);

    function homeController($q, $rootScope, $scope, $location, config, entityManagerFactory, logger) {

        var log = logger.getLogFn(controllerId);

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
            $location.url('/');
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
    }
})();

