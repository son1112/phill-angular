app.directive('pageInfo', function() {
        return {
        restrict: 'E',
    scope: {
        info: '='
    },
    templateUrl: 'js/directives/pageInfo.html'
  };
});
