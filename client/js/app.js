var app = angular.module('flapper', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html'
        // views: {
        //     "view": {"template": "home.html"}
        // }
        // controller: 'mainCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: '/views/about.html'
    })
    .state('upload', {
        url: '/upload',
        templateUrl: '/views/uploadForm.html',
        controller: 'mainCtrl'
    });
    
    $urlRouterProvider.otherwise('home');
});


app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            // transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
            console.log('succedded..');
        })
        .error(function(){
            console.log('errored..');
        });
    }
}]);