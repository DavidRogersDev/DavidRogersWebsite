(function () {
    'use strict';

    var darApp = angular.module(clientConstants.appName);

    // Collect the routes
    darApp.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    darApp.config(['$routeProvider', 'routes', '$locationProvider', routeConfigurator]);
    
    function routeConfigurator($routeProvider, routes, $locationProvider) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });

        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({ redirectTo: '/home' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/home',
                config: {
                    templateUrl: '/Scripts/app/templates/Home.html',
                    controller: 'HomeController'
                }
            },
            {
                url: '/gitHub',
                config: {
                    templateUrl: '/Scripts/app/templates/GitHub.html',
                    controller: 'GitHubController'
                }
            },            
            {
                url: '/articles',
                config: {
                    templateUrl: '/Scripts/app/templates/Articles.html',
                    controller: 'ArticlesController'
                }
            },
            {
                url: '/projects',
                config: {
                    templateUrl: '/Scripts/app/templates/Projects.html',
                    controller: 'ProjectsController'
                }
            },
            {
                url: '/contact',
                config: {
                    templateUrl: '/Scripts/app/templates/Contact.html',
                    controller: 'ContactController'
                }
            }
        ];
    }
})();

