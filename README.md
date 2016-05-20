<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Template</a>
<ul>
<li><a href="#sec-1-1">1.1. Styles</a></li>
</ul>
</li>
<li><a href="#sec-2">2. Scope</a>
<ul>
<li><a href="#sec-2-1">2.1. Controllers</a></li>
<li><a href="#sec-2-2">2.2. Directives</a></li>
</ul>
</li>
<li><a href="#sec-3">3. Dev</a>
<ul>
<li><a href="#sec-3-1">3.1. Thu May 19 11:08:43 CDT 2016</a></li>
</ul>
</li>
</ul>
</div>
</div>

**Prairie Hill Learning Center**

# Template<a id="sec-1" name="sec-1"></a>

<./app/index.html>

    <!doctype html>
    <html>
      <head>
        <link href="css/main.css" rel="stylesheet" />
    
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
      </head>
    
      <body ng-app="pHill" ng-controller="MainController">
    
        <div id="header">
          <img ng-src="{{ site_logo }}" style="width:15%;">
        </div>
    
        <div class="main">
          <h1>{{ site_title }}</h1>
          <h2>{{ site_quote }}</h2>
    
          <div ng-repeat="page in pages">
            <page-info info="page"></page-info>
          </div>
        </div>
    
        <!-- Modules -->
        <script src="js/app.js"></script>
    
        <!-- Controllers -->
        <script src="js/controllers/MainController.js"></script>
    
        <!-- Directives -->
        <script src="js/directives/pageInfo.js"></script>
      </body>
    </html>

## Styles<a id="sec-1-1" name="sec-1-1"></a>

<./app/css/main.css>

# Scope<a id="sec-2" name="sec-2"></a>

## Controllers<a id="sec-2-1" name="sec-2-1"></a>

<./app/js/app.js>

    var app = angular.module("pHill", []);

<./app/js/controllers/MainController.js>

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

## Directives<a id="sec-2-2" name="sec-2-2"></a>

<./app/js/directives/pageInfo.js>

    app.directive('pageInfo', function() {
            return {
            restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/pageInfo.html'
      };
    });

<./app/js/directives/pageInfo.html>

    <a href="#">{{ info.title }}</a>

# Dev<a id="sec-3" name="sec-3"></a>

## Thu May 19 11:08:43 CDT 2016<a id="sec-3-1" name="sec-3-1"></a>

    Init:

Rebuilding the Prairie Hill site as an Angular application after constructing
an API on the old site.
