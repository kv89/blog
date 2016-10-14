app.config(function ($controllerProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('root', {
            url: '',
            views: {
                "page": { "templateUrl": "/views1/page.html" }
            },
            controller: 'AppCtrl'
        })
        .state("root.about", {
        	url: '/about',
        	views: {
        		"page": {"templateUrl": "/views1/about.html"}
        	}
        });
});