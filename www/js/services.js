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
    get: function(url) {
        $http({
            method: 'GET',
            url: 'https://limitless-plains-1406.herokuapp.com/job?id='+url
        }).
        success(function(response, status, headers, config) {
            //alert(JSON.stringify(response));
            return response;
        }).
        error(function(data, status, headers, config) {
            return null;
        });
    }
  };
});
