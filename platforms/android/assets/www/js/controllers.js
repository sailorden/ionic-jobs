angular.module('starter.controllers', [])

.controller('QuestionsCtrl', function($scope) {})

.controller('JobsCtrl', function($scope, Jobs, $timeout) {
  var storageJobs = localStorage.getItem('jobs');
  $scope.jobs = JSON.parse(storageJobs);
  $timeout(function(){
    $scope.jobs = Jobs.all();
    localStorage.setItem('jobs', JSON.stringify($scope.jobs));
   },
  2000);
  $scope.remove = function(job) {
    Jobs.remove(job);
  };
  $scope.refresh = function(){
      Jobs.refresh().then(function(response) {
          $scope.jobs = response.data;
          localStorage.setItem('jobs', JSON.stringify($scope.jobs));
          $scope.$broadcast('scroll.refreshComplete');
      });
  }
})

.controller('JobDetailCtrl', function($scope, $stateParams, $timeout, Jobs) {
    Jobs.get($stateParams.jobId).then(function(response){
        $timeout(function() {$scope.job = response.data});
    })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
