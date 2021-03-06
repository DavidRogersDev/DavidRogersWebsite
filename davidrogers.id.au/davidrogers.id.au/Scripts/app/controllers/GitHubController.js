(function() {
    'use strict';

    var controllerId = 'GitHubController';

    angular.module(clientConstants.appName).controller(controllerId, ['$scope', '$location', 'config', gitHubController]);

    function gitHubController($scope, $location, config) {

        $scope.gitHubTitle = 'GitHub Code';
        $scope.repoTitle = 'My Repositories';
        $scope.gistsTitle = 'My Gists';
        $scope.githubSite = 'https://github.com/DavidRogersDev';

        //$scope.getData = function () {

            //datacontext.getRepositories().then(function (data) {
            //    //console.log(data);
            //    $rootScope.repos = data;
            //});

            //datacontext.getGists().then(function (data) {
            //    //console.log(data);
            //    $rootScope.gists = data;
            //});
        //};

        $scope.goGithubDave = function () {
            //$location.replace();
            window.location.assign($scope.githubSite);
        };



        $scope.getFileName = function(gist) {

            var file = '';

            for (var fileName in gist) {
                if (gist.hasOwnProperty(fileName)) {
                    file = gist[fileName].filename;
                }
            }
            return file;
        };

    }


})();