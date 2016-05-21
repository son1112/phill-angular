app.controller('MainController', ['$scope', 'activities', function($scope, activities) {

    activities.success(function(data) {
        $scope.activities = data;
    });
    
    $scope.site_title = 'Prairie Hill Learning Center';
    $scope.site_quote = 'Education is a natural process spontaneously carried out by the human individual, and is acquired not by listening to words but by experiencing them. --Maria Montessori, Education for a New World';
    $scope.site_logo = 'img/logo.jpg';
    $scope.bg_imgs = [
        {
            file: 'img/audrey_jump.jpg'
        },
        {
            file: 'img/logo.jpg'
        }
    ];
    $scope.pages = [
        {
            title: 'Home',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'About',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Programs',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Tours',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Staff',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Calendar',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Employment',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Donate',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Contact',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        },
        {
            title: 'Events',
            subtitle: '',
            message: 'Welcome to Prairie Hill Learning Center!'
        }
    ];
}]);
