(function () {
'use strict';


angular.module('myFirstApp',[])

.controller('MyFirstContoller', function ($scope){
  $scope.name="nitheesh";
$scope.sayHello=function (){
  return "hello";
};
});

})();
