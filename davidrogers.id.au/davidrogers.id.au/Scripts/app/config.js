(function() {
    'use strict';

    var darApp = angular.module(clientConstants.appName);

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
    
    // For use with the Github API
    var remoteServiceName = 'https://api.github.com/users/DavidRogersDev';
    

    var config = {
        appErrorPrefix: '[CC Error] ', //Configure the exceptionHandler decorator
        remoteServiceName: remoteServiceName,
    };
    
    darApp.value('config', config);

    darApp.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);

})();