var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit
        });

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
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
