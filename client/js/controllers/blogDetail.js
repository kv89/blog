app.controller('BlogDetailCtrl', ['$scope', '$stateParams','$sce', function ($scope, $stateParams, $sce) {
    console.log('detail init ... ', $stateParams);
    $scope.post = $stateParams.post;
    
    
    $scope.trustAsHtml = function ( data ) {
        console.log('html - ', data);
        return $sce.trustAsHtml( data );
    };
}]);