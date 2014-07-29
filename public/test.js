var app = angular.module("app", [ ]);

app.controller("AppTest", function($scope, $http){
  /**
  global vars
  **/
  app=this;
  $scope.hackerTop = "";
  $scope.lobTop = "";
  $scope.rTop = "";
  $scope.hackerNew = "";
  $scope.lobNew = "";
  $scope.rNew = "";

  /**
  For top posts
  **/
  $http.get('/ycomb').success(function(data) {
      $scope.hackerTop = data;
      console.log(data);
  });
  $http.get('/lobster').success(function(data) {
      $scope.lobTop = data;
  });
  $http.get('/rp').success(function(data) {
      $scope.rTop = data;
  });

  /**
  For new posts
  **/
  $http.get('/ynew').success(function(data) {
      $scope.hackerNew = data;
  });
  $http.get('/lnew').success(function(data) {
      $scope.lNew = data;
  });
  $http.get('/rnew').success(function(data) {
      $scope.rNew = data;
  });

});