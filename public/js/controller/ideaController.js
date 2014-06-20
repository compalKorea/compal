/**
 * Created by Administrator on 2014-06-11.
 */
/**
 * Created by Administrator on 2014-06-02.
 */
angular.module("ideaHome",  [ 'angularFileUpload' ])
    .controller('ideaController', ['$scope', '$http', '$timeout', '$upload', '$timeout', function($scope, $http, $timeout, $upload, $timeout){
        console.log("aaaa");
        $timeout(function() {
            console.log($("#Stage_container").attr('class'));
            $.ajaxSetup({cache:false});
            $("#Stage_info").load('sendIdea.html');
        }, 0);

        $scope.form = {};
        $scope.selectedFiles = [];

        $scope.onFileSelect = function($files) {
            $scope.selectedFiles = $files;
        };

        $scope.sendIdea = function(){
            console.log("aaaaa");
            if($scope.myForm.input.$error.required)
                return;
            else if($scope.myForm.$error.email)
                return;

            $upload.upload({
                url : '/sendIdea',
                method: 'post',
                headers: {'my-header': 'my-header-value'},
                data :  $scope.form,
                file: $scope.selectedFiles[0],
                fileFormDataName: 'myFile'
            }).then(function(response) {
                 if(response.data.err){
                     alert(response.data.err);
                     return;
                 }
            }, function(response) {
                 console.log("eeee");
            });
        }
    }]).directive('ngAutoExpand',['$document', function($document) {
        return {
            restrict: 'A',
            scope : {
                data : '=myData'
            },
            link: function(scope, elem, attrs) {
                scope.$watch('data', function(value){
                    $(elem).height(0);
                    var height = $(elem)[0].scrollHeight;

                    // 8 is for the padding
                    if (height < 100) {
                        height = 100;
                    }
                    if(height > 300)
                        height = 300;

                    $(elem).height(height);
                });

                elem.bind('keydown', function($event) {
                    var element = $event.target;
                    $(element).height(0);
                    var height = $(element)[0].scrollHeight;

                    // 8 is for the padding
                    if (height < 100) {
                        height = 100;
                    }
                    if(height > 300)
                        height = 300;

                    $(element).height(height);
                });

                // Expand the textarea as soon as it is added to the DOM
                setTimeout( function() {
                    var element = elem;

                    $(element).height(0);
                    var height = $(element)[0].scrollHeight;

                    // 8 is for the padding
                    if (height < 100) {
                        height = 100;
                    }
                    $(element).height(height);
                }, 0)
            }
        };
    }]);

function submit1(){
    alert("aaaa");
}