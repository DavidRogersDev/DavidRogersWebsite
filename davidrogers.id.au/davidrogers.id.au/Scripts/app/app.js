(function() {
    'use strict';

    var darApp = angular.module('darApp', [
        // Angular modules 
        'ngRoute',
        'ngAnimate'

        // Custom modules 
        //'common'           // common functions, logger, spinner
    ]);

    
    darApp.run(['$route', '$rootScope', '$q', function ($route, $rootScope, $q) {
               // Include $route to kick start the router.
               breeze.core.extendQ($rootScope, $q);
        //datacontext.prime();
        
                // publish current transition direction on rootScope
               $rootScope.direction = 'ltr';
                // listen change start events

               $rootScope.$on('$routeChangeStart', function (event, next, current) {
                   $rootScope.direction = 'rtl';
                   // console.log(arguments);
                   if (current && next && (current.depth > next.depth)) {
                       $rootScope.direction = 'ltr';
                   }
                   // back
                   $rootScope.back = function() {
                       $window.history.back();
                   };
               });

           }]);

    //$.get('http://www.davidrogers.id.au/wp/', { feed: 'rss2' }, function(xml) {
    //    var oi = xml;
    //}, 'xml');

})();