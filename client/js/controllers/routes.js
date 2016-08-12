app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '',
            views: {
                "master": { "templateUrl": "/views/header.html" }
                // 'footer':{templateUrl: 'footer.html'}
            },
            controller: 'AppCtrl'
        })
        .state('root.home', {
            url: '/home',
            views: {
                "body": { "templateUrl": "/views/main.html" }
            }
            // controller: 'mainCtrl'
        })
        .state('root.about', {
            url: '/about',
            views: {
                "body": { templateUrl: '/views/about.html' }
            }
        })
        .state('root.blogs', {
            url: '/blogs',
            views: {
                "body": { templateUrl: '/views/blogs.html' }
            }
        })
        .state('root.blogs.detail', {
            url: '/detail/:title',
            params: {
                post: null
            },
            views: {
                "body@root": { templateUrl: '/views/blogDetail.html' },
            },
            controller: 'BlogDetailCtrl'
        });
    // .state('upload', {
    //     url: '/upload',
    //     templateUrl: '/views/uploadForm.html',
    //     controller: 'mainCtrl'
    // });
    
    // $urlRouterProvider.otherwise('home');
});