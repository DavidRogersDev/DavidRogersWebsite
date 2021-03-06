(function () {
    'use strict';

    var controllerId = 'ArticlesController';

    var darApp = angular.module(clientConstants.appName);

    darApp.controller(controllerId, ['$scope', '$location', 'config', articlesController]);

    function articlesController($scope, $location, config) {

        $scope.winformsMVPArticleUrl = 'http://www.codeproject.com/Articles/522809/WinForms-MVP-An-MVP-Framework-for-Winforms';
        $scope.claimsAuthArticleUrl = 'http://www.codeproject.com/Articles/639458/Claims-Based-Authentication-and-Authorization';
        $scope.encryptionPGPArticleUrl = 'http://www.codeproject.com/Articles/457453/PGP-Encryption-with-Csharp';
        $scope.loadingRelatedEntitiesArticleUrl = 'http://www.codeproject.com/Articles/788559/Loading-Related-Entities-with-Entity-Framework-A-B';
        $scope.articlesPageHeading = 'Articles';
        
        $scope.codeProjectArticlesHeading = 'Code Project Articles';
        $scope.blogArticlesHeading = 'Noteable Blog Posts';
        

        $scope.jsLastValuePost = 'http://bit.ly/jslastvalue';
        $scope.jqueryUiDatePickerPost = 'http://bit.ly/juidatepicker';
        $scope.homeBackupPost = 'http://bit.ly/robobak';
        $scope.findAndReplacePost = 'http://bit.ly/psfindreplace';

    }

})();