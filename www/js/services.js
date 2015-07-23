angular.module('starter.services', [])

.factory('Jobs', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var jobs = {};
 $http({
      method: 'GET',
      url: 'https://limitless-plains-1406.herokuapp.com/jobs'
  }).
  success(function(response, status, headers, config) {
      jobs = response;
  }).
  error(function(data, status, headers, config) {
      jobs =  [];
  });

  return {
    all: function() {
      return jobs;
    },
    remove: function(job) {
        jobs.splice(jobs.indexOf(job), 1);
    },
    refresh: function(){
        var promise = $http({
            method: 'GET',
            url: 'https://limitless-plains-1406.herokuapp.com/jobs'
        }).
        success(function(response, status, headers, config) {
            return response;
        }).
        error(function(data, status, headers, config) {
            return null;
        });
        return promise;
    },
    get: function(id){
          var promise = $http({
              method: 'GET',
              url: 'https://limitless-plains-1406.herokuapp.com/job?url='+id
          }).
          success(function(response, status, headers, config) {
              return response;
          }).
          error(function(data, status, headers, config) {
              return null;
          });
      return promise;
    }
  };
});
