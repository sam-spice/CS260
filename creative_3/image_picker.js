/**
 * 1. We have added a directive with the name 'avatar' and handler of
 * avatarDirective to our angular app module
 */
angular.module('app', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {

    $scope.images = ["45Degrees", "315Degrees"];
    $scope.visible = function(){
        $scope.angle_img = { "display" : "block" };
    };
}