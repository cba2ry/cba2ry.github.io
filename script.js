// create the module and name it scotchApp
    // also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('authController', function($scope) {
    $scope.authenticate = function() {
      $scope.message = 'Called authController!';
      authClient.signIn({
        username: 'chris.barry',
        password: 'Training123'
      })
      .then(function(transaction) { // On success
        switch(transaction.status) {

          case 'SUCCESS':
            authClient.session.setCookieAndRedirect(transaction.sessionToken); // Sets a cookie on redirect
            break;

          default:
            throw 'We cannot handle the ' + transaction.status + ' status';
        }
      })
      .fail(function(err) { // On failure
        console.error(err);
      });
    }
});

// Okta AuthN API
var authClient = new OktaAuth({url: 'https://cbarry.okta.com'});
/*
authClient.signIn({
  username: 'some-username',
  password: 'some-password'
})
.then(function(transaction) { // On success
  switch(transaction.status) {

    case 'SUCCESS':
      authClient.session.setCookieAndRedirect(transaction.sessionToken); // Sets a cookie on redirect
      break;

    default:
      throw 'We cannot handle the ' + transaction.status + ' status';
  }
})
.fail(function(err) { // On failure
  console.error(err);
});
*/
