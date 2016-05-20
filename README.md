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
          <div class="pure-u-1-8">
            <div id="logo" class="padded-half">
              <img class="pure-img" ng-src="{{ site_logo }}">
            </div>
          </div>
    
          <!-- title -->
          <div class="title pure-u-7-8">
            <div class="padded-1">
              <h1>{{ site_title }}</h1>
            </div>
          </div>
    
        </div>
    
        <div id="main" class="pure-g">
    
          <!-- nav -->
          <div class="pure-u-1-7 pure-u-sm-1-8">
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
    
          <div id="content" class="pure-u-6-7 pure-u-sm-8-9">
            {{ page_content }}
          </div>
    
        </div>
    
        <div id="footer" class="pure-g">
          <div class="pure-u-1-1">
            <div class="padded-1">
              <h2>{{ site_quote }}</h2>
            </div>
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

    html, button, input, select, textarea,
    .pure-g [class *= "pure-u"] {
        font-family: Roboto, 'Clicker Script', 'Kaushan Script', 'News Cycle', BenchNine, 'Poiret One', 'Open Sans Condensed', Playball, 'Shadows Into Light Two';
    }
    html {
        background: url('../img/audrey_jump.jpg') top center no-repeat;
        background-size: 100%;
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
        margin: 2px 0;
    }
    
    .pure-g [class *= "title"] {
        font-family: Lobster, 'Clicker Script', 'Kaushan Script', 'News Cycle', BenchNine, 'Poiret One', 'Open Sans Condensed', Playball, 'Shadows Into Light Two';
        color: white;
        text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    
        font-size: 2em;
    }
    
    #logo {
        background: white;
        border-radius: 5%;
    }

### Pure CSS<a id="sec-1-1-1" name="sec-1-1-1"></a>

1

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

    app.controller('MainController', ['$scope', function($scope) {
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

# Dev<a id="sec-3" name="sec-3"></a>

## Thu May 19 11:08:43 CDT 2016<a id="sec-3-1" name="sec-3-1"></a>

    Init:

Rebuilding the Prairie Hill site as an Angular application after constructing
an API on the old site.
