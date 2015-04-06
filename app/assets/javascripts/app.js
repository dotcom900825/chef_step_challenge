angular.module('csChallenge', ['templates', 'ngRoute'])

.controller("ChallengeController", function($scope){
})

.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: "index.html",
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
})

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