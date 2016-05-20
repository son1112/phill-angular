app.controller('MainController', ['$scope', function($scope) {
    $scope.site_title = 'Prairie Hill Learning Center';
    $scope.site_quote = 'Education is a natural process spontaneously carried out by the human individual, and is acquired not by listening to words but by experiencing them. --Maria Montessori, Education for a New World';
    $scope.site_logo = 'img/logo.jpg';
    $scope.pages = [
        {
            title: 'Home'
        },
        {
            title: 'About'
        },
        {
            title: 'Programs'
        },
        {
            title: 'Tours'
        },
        {
            title: 'Staff'
        },
        {
            title: 'Calendar'
        },
        {
            title: 'Employment'
        },
        {
            title: 'Donate'
        },
        {
            title: 'Contact'
        },
        {
            title: 'Events'
        }
    ];
}]);
