angular.module('starter.controllers', [])

.controller('QuestionsCtrl', function($scope) {})

.controller('JobsCtrl', function($scope, Jobs, $timeout) {
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $timeout(function(){
      $scope.jobs = Jobs.all();
  }, 2000);
  $scope.remove = function(job) {
    Jobs.remove(job);
  };
})

.controller('JobDetailCtrl', function($scope, $stateParams, Jobs) {
  $scope.job = Jobs.get($stateParams.jobId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
