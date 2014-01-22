(function () {
    'use strict';

    var controllerId = 'ArticlesController';

    var darApp = angular.module(clientConstants.appName);

    darApp.controller(controllerId, ['$scope', '$location', 'config', articlesController]);

    function articlesController($scope, $location, config) {

        $scope.winformsMVPArticleUrl = 'http://www.codeproject.com/Articles/522809/WinForms-MVP-An-MVP-Framework-for-Winforms';
        $scope.claimsAuthArticleUrl = 'http://www.codeproject.com/Articles/639458/Claims-Based-Authentication-and-Authorization';
        $scope.encryptionPGPArticleUrl = 'http://www.codeproject.com/Articles/457453/PGP-Encryption-with-Csharp';
        $scope.articlesPageHeading = 'Articles';
        
        $scope.codeProjectArticlesHeading = 'Code Project Articles';
        $scope.blogArticlesHeading = 'Noteable Blog Posts';
        

        $scope.jsLastValuePost = 'http://www.davidrogers.id.au/wp/?p=2130';
        $scope.jqueryUiDatePickerPost = 'http://www.davidrogers.id.au/wp/?p=2159';
        $scope.homeBackupPost = 'http://www.davidrogers.id.au/wp/?p=2167';
        $scope.findAndReplacePost = 'http://www.davidrogers.id.au/wp/?p=1296';

    }

})();