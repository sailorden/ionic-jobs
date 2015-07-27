angular.module('starter.controllers', [])

.controller('QuestionsCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion, $timeout) {
    $timeout(function(){
        ionicMaterialInk.displayEffect();
        ionicMaterialMotion.ripple();
    },0);
})
.controller('JobsCtrl', function($scope, Jobs, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  },0);
  var storageJobs = localStorage.getItem('jobs');
  $scope.jobs = JSON.parse(storageJobs);
  Jobs.refresh().then(function(response) {
      $scope.jobs = response.data;
      localStorage.setItem('jobs', JSON.stringify($scope.jobs));
  });
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
.controller('JobDetailCtrl', function($scope, $stateParams, $timeout, Jobs, ionicMaterialInk, ionicMaterialMotion, $cordovaSocialSharing) {
    $timeout(function(){
        ionicMaterialInk.displayEffect();
        ionicMaterialMotion.ripple();
    },0);
    Jobs.get($stateParams.jobId).then(function(response){
        $timeout(function() {$scope.job = response.data});
    })
    $scope.dropIt = false;
    $scope.shareIt = function(name, description, link){
        $scope.dropIt = true;
        $timeout(function(){
            $scope.dropIt = false;
        }, 80)
        $cordovaSocialSharing
            .shareViaTwitter(name + " needs a " + description, null, "http://jobs.ionic.io/job/"+link)
            .then(function(result) {
                // Success!
            }, function(err) {
                // An error occurred. Show a message to the user
            });
    }
})

.controller('AccountCtrl', function($scope, $timeout, ionicMaterialInk, ionicMaterialMotion) {
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  },0);
  $scope.settings = {
    enableFriends: true
  };
});
