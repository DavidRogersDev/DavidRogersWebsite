(function () {
    'use strict';

    var darApp = angular.module('darApp');
    var controllerId = 'ProjectsController';

    darApp.controller(controllerId, ['$scope', '$location', ProjectsController]);
    
    function ProjectsController($scope, $location) {

        $scope.projectsTitle = 'Projects';
        $scope.winFormsMVPTitle = 'WinFormsMVP';
        $scope.winFormsMVPLogoPath = './Content/Images/WinFormsMVPLogo.png';
        $scope.webformsMVPSite = 'https://github.com/webformsmvp/webformsmvp';
        $scope.winfomsMVPArticle = 'http://www.codeproject.com/Articles/522809/WinForms-MVP-An-MVP-Framework-for-Winforms';

        $scope.backHome = function () {
            $location.replace();
            $location.url('/');
        };

    }

})()
