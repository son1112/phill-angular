app.factory('activities', ['$http', function($http) {
    return $http.get('http://phill-new.herokuapp.com/api/v1/activities')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
