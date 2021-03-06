(function () {
    'use strict';

    var controllerId = 'ContactController';

    var darApp = angular.module(clientConstants.appName);

    darApp.controller(controllerId, ['$scope', '$location', 'config', contactController]);

    function contactController($scope, $location, config) {
        $scope.contactTitle = 'Avenues of Contact';
        $scope.socialMediaTitle = 'Social Stuff';
        $scope.traditionalTitle = 'Traditional Means';
        $scope.emailAddress = 'mailto:drogersbox-cometome@yahoo.com.au';
        $scope.gPlusUrl = 'https://plus.google.com/u/0/+DaveRogersEsq/posts';
        $scope.linkedInUrl = 'http://www.linkedin.com/profile/view?id=111942157';
        $scope.daveNoFaceBookMsg = 'Dave does not have a Facebook account';
        $scope.daveNoTwitterMsg = 'Dave does not have a twitter account';
        var nullFacebookObject = $('#nullFacebook');
        var nullTwitterObject = $('#nullTwitter');
        var toggle = 'toggle';
        var tooltipOptions = {
            placement: 'right',
            trigger: 'hover'
        };
        
        
        
        $scope.goToGooglePlus = function () {
            $location.replace();
            window.location.assign($scope.gPlusUrl);
        };

        $scope.goToLinkedIn = function () {
            $location.replace();
            window.location.assign($scope.linkedInUrl);
        };

        $scope.nullFacebook = function () {
            
            nullFacebookObject.tooltip(tooltipOptions).tooltip(toggle);
        };

        $scope.nullTwitter = function () {
            nullTwitterObject.tooltip(tooltipOptions).tooltip(toggle);
        };
    }

    

})();