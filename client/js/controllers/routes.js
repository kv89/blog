app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '',
            views: {
                "page": { "templateUrl": "/views1/page.html" }
            },
            controller: 'AppCtrl'
        })
});