angular.module('csChallenge', ['templates', 'ngRoute'])

.controller("ChallengeController", ['$scope', function($scope){
}])

.config(["$routeProvider", function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: "q1.html",
    controller: "ChallengeController"
  })
  .when('/q2', {
    templateUrl: "q2.html",
    controller: "ChallengeController"
  })
  .when('/q3', {
    templateUrl: "q3.html",
    controller: "ChallengeController"
  })
  .when('/q4', {
    templateUrl: "q4.html",
    controller: "ChallengeController"
  })
  .when('/worker', {
    templateUrl: "worker.html",
    controller: "ChallengeController"
  })
  .when('/single_thread_solution', {
    templateUrl: "s_solution.html",
    controller: 'ChallengeController'
  })
  .when('/multi_threaded_solution', {
    templateUrl: "m_solution.html",
    controller: "ChallengeController"
  })
  .when('/discussion', {
    templateUrl: "discussion.html",
    controller: "ChallengeController"
  })
}])

.directive('snippet', ['$timeout', '$interpolate', function($timeout, $interpolate) {
    return {
        restrict: 'E',
        template:'<pre><code class="ruby" ng-transclude></code></pre>',
        replace:true,
        transclude:true,
        link:function(scope, elm, attrs){             
            var tmp =  $interpolate(elm.find('code').text())(scope);
             $timeout(function() {                
                elm.find('code').html(hljs.highlightAuto(tmp, ['ruby']).value);
              }, 0);
        }
    };
}]);