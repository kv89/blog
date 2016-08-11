app.controller('AppCtrl', ['$scope', '$http', 'fileUpload', '$sce', function ($scope, $http, fileUpload, $sce) {
    console.log('loading - AppCtrl');
    $scope.posts = [
        {
            title: "Deaths from diabetes will rise: ISCR",
            links: [
                "http://www.ptinews.com/news/7304890_Deaths-from-diabetes-will-rise--ISCR.html 06 April 2016"
            ],
            image: '/images/diabetes.jpg',
            contents: `<p><span style="font-size: medium;"><em><strong>W</strong></em>ith an increase in life expectancy, obesity and sedentary lifestyles, the prevalence of diabetes will rise dramatically and also the number of resulting deaths, a research body today warned and stressed for greater investments in research to find its "<em><strong>affordable</strong></em>" treatment.</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;"><em><strong>N</strong></em>oting that in 2012 there were an estimated 2.2 lakh diabetes related deaths in <em><strong>India</strong></em>, <em><strong>Indian Society of Clinical Research</strong></em> (<em><strong>ISCR</strong></em>) said that there is an urgent need to focus on prevention, early detection and treatment of diabetes to effectively combat the chronic disease.</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;"><em><strong>R</strong></em>ecognising the growing prevalence of diabetes particularly in low and middle income countries and its increasing burden on society and the healthcare delivery system, '<em><strong>Beat Diabetes</strong></em>' is the theme adopted by the <em><strong>WHO</strong></em> for <em><strong>World Health Day</strong></em> which falls on April 7.</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;">"<em><strong>D</strong></em>iabetes is an enormous public health challenge in India and cuts across all economic strata. We need greater investments in clinical research to find more affordable and accessible treatment options for the increasing number of diabetics in our country. This will reduce the pressure on our overburdened health infrastructure," said <em><strong>Suneela Thatte</strong></em>, President, <em><strong>ISCR</strong></em>.</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;"><em><strong>I</strong></em>t is estimated that by 2030, there will be more than 100 million patients living with diabetes in <em><strong>India</strong></em>, while according to <em><strong>WHO</strong></em>'s <em><strong>Diabetes Country Profiles</strong></em>, in 2012 there were an estimated 2.2 lakh diabetes related deaths in India.</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;"><em><strong>W</strong></em>ith an increase in life expectancy, obesity and sedentary lifestyles, the prevalence of diabetes will rise dramatically and so will the corresponding number of deaths from diabetes, the body said.</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;"><em><strong>ISCR</strong></em> said that it is optimistic that the recent changes by the regulatory authorities in India to create a balanced and scientific environment for the conduct of clinical research in the country will see sponsors increase investments in endemic illnesses in the region like diabetes.</span></p>`
        }
    ];


    $scope.trustAsHtml = function ( data ) {
        return $sce.trustAsHtml( data );
    };
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
    
    function loadFiles() {

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