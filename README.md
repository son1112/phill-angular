<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Template</a>
<ul>
<li><a href="#sec-1-1">1.1. Styles</a>
<ul>
<li><a href="#sec-1-1-1">1.1.1. Pure CSS</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-2">2. Scope</a>
<ul>
<li><a href="#sec-2-1">2.1. Controllers</a></li>
<li><a href="#sec-2-2">2.2. Directives</a>
<ul>
<li><a href="#sec-2-2-1">2.2.1. pageInfo</a></li>
</ul>
</li>
<li><a href="#sec-2-3">2.3. Services</a></li>
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
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
        <link href="css/main.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link href='http://fonts.googleapis.com/css?family=Lobster|Roboto:400,100,100italic,700italic,700|Clicker+Script|Kaushan+Script|News+Cycle:400,700|BenchNine|Poiret+One|Open+Sans+Condensed:300|Playball|Shadows+Into+Light+Two' rel='stylesheet' type='text/css'>
    
        <!--[if lte IE 8]>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-old-ie-min.css">
        <![endif]-->
        <!--[if gt IE 8]><!-->
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
        <!--<![endif]-->
      </head>

    <body ng-app="pHill" ng-controller="MainController">
    
      <!-- header -->
      <div id="header" class="pure-g pure-img">
    
        <!-- logo -->
        <div class="pure-u-3-24 pure-u-sm-4-24 pure-u-lg-5-24">
          <div id="logo" class="padded-half">
            <img class="pure-img" ng-src="{{ site_logo }}">
          </div>
        </div>
    
        <!-- title -->
        <div class="title pure-u-21-24 pure-u-sm-20-24 pure-u-lg-19-24">
          <div class="padded-1">
            <h1>{{ site_title }}</h1>
          </div>
        </div>
    
      </div>

        <!-- main -->
        <div id="main" class="pure-g">
    
          <!-- nav -->
          <div class="pure-u-3-24 pure-u-sm-4-24">
            <div id="nav"> 
              <div class="pure-menu custom-restricted-width">
                <nav>
                  <ul class="pure-menu-list">
                    <div ng-repeat="page in pages">
                      <page-info info="page"></page-info>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
    
          <!-- content -->
          <div class="pure-u-12-24 pure-u-sm-14-24">
            <div id="content" class="padded-1">
              <div ng-repeat="activity in activities">
                <p>{{ activity.work_area }}</p>
              </div>
            </div>
          </div>
    
        </div>
    
        <!-- footer -->
        <div id="footer" class="pure-g">
          <div class="pure-u-1-1">
            <div class="padded-1">
              <p class="quote">{{ site_quote }}</p>
            </div>
          </div>
        </div>
    
        <!-- Modules -->
        <script src="js/app.js"></script>
    
        <!-- Controllers -->
        <script src="js/controllers/MainController.js"></script>
    
        <!-- Directives -->
        <script src="js/directives/pageInfo.js"></script>
    
        <!-- Services -->
        <script src="js/services/activities.js"></script>
    
      </body>
    </html>

## Styles<a id="sec-1-1" name="sec-1-1"></a>

<./app/css/main.css>

    html, button, input, select, textarea,
    .pure-g [class *= "pure-u"] {
        font-family: Roboto, 'Clicker Script', 'Kaushan Script', 'News Cycle', BenchNine, 'Poiret One', 'Open Sans Condensed', Playball, 'Shadows Into Light Two';
    }
    html {
        background: url('../img/audrey_jump.jpg') top center no-repeat;
        background-size: 100%;
        //background-color: rgba(27,125,100,0.7);
        background-color: rgba(242,172,188,0.3);
    }
    
    .custom-restricted-width {
        /*display: inline-block;*/
        /*width: 10em;*/
    }
    
    .padded-1 {
        padding: 1em;
    }
    .padded-half {
        padding: 0.5em;
    }
    
    .button-go {
        background: rgb(27, 125, 0);
        border-radius: 5px;
        margin: 2px 0;
    
        box-shadow:
        -1px -1px 0 rgba(75,70,59,0.5),
        1px -1px 0 rgba(75,70,59,0.5),
        -1px 1px 0 rgba(75,70,59,0.5),
        1px 1px 0 rgba(75,70,59,0.5);
    }
    
    .pure-g [class *= "title"] {
        font-family: Lobster, 'Clicker Script', 'Kaushan Script', 'News Cycle', BenchNine, 'Poiret One', 'Open Sans Condensed', Playball, 'Shadows Into Light Two';
        color: white;
        text-shadow:
        -1px -1px 0 rgba(0,0,0,0.3),
        1px -1px 0 rgba(0,0,0,0.3),
        -1px 1px 0 rgba(0,0,0,0.3),
        1px 1px 0 rgba(0,0,0,0.3);
    
        font-size: 2em;
    }
    
    #nav {
        padding: 0.5em;
    }
    
    #logo {
        margin: 0.5em;
        background: white;
        border-radius: 5%;
    }
    
    #footer {
        background: rgba(254,237,0,0.7);
    }
    
    #footer .quote {
        text-align: center;
        font-size: 1.5em;
    }
    
    /*content*/
    
    #content {
        background: white;
        border-radius: 15px;
        margin: 0.5em;
        height: 350px;
        overflow-y: scroll;
    
        box-shadow:
        -1px -1px 0 rgba(75,70,59,0.5),
        1px -1px 0 rgba(75,70,59,0.5),
        -1px 1px 0 rgba(75,70,59,0.5),
        1px 1px 0 rgba(75,70,59,0.5);
    }
    
    #content ul {
    
    }

### Pure CSS<a id="sec-1-1-1" name="sec-1-1-1"></a>



    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--[if lte IE 8]>
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-old-ie-min.css">
    <![endif]-->
    <!--[if gt IE 8]><!-->
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
    <!--<![endif]-->

# Scope<a id="sec-2" name="sec-2"></a>

## Controllers<a id="sec-2-1" name="sec-2-1"></a>

<./app/js/app.js>

    var app = angular.module("pHill", []);

<./app/js/controllers/MainController.js>

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

## Directives<a id="sec-2-2" name="sec-2-2"></a>

### pageInfo<a id="sec-2-2-1" name="sec-2-2-1"></a>

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

    <li class="pure-menu-item">
      <button class="pure-button pure-button-primary button-go pure-u-1-1">{{ info.title }}</button>
    </li>

## Services<a id="sec-2-3" name="sec-2-3"></a>

<./app/js/services/activities.js>

    app.factory('activities', ['$http', function($http) {
        return $http.get('http://phill-new.herokuapp.com/api/v1/activities')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
    }]);

# Dev<a id="sec-3" name="sec-3"></a>

## Thu May 19 11:08:43 CDT 2016<a id="sec-3-1" name="sec-3-1"></a>

    Init:

Rebuilding the Prairie Hill site as an Angular application after constructing
an API on the old site.
