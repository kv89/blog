app.controller('mainCtrl', ['$scope', '$http', 'fileUpload', function ($scope, $http, fileUpload) {

    $scope.posts = [
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' },
        { title: 'title 1', link: ' link 1' }
    ];

    // $scope.addPost = function () {
    //     if (!$scope.title || $scope.title === '') { return; }

    //     $scope.posts.push({
    //         title: $scope.title,
    //         link: $scope.link,
    //         upvotes: 0,
    //         comments: [
    //             { author: 'Joe', body: 'Cool post!', upvotes: 0 },
    //             { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
    //         ]
    //     });

    //     $scope.title = '';
    //     $scope.link = '';
    // }

    // $scope.incrementUpvotes = function (post) {
    //     post.upvotes += 1;
    // }
    
    function loadFiles(){
        
    }
    
    $scope.upload = function (filee) {
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        // var uploadUrl = "http://10.100.129.79:3000/api/upload";
        var uploadUrl = "http://localhost:3000/api/upload";
        fileUpload.uploadFileToUrl(file, uploadUrl);

    };

}]);