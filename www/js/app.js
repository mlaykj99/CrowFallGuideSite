/**
 * Created by Josh on 7/20/2016.
 */

var app = angular.module('guild', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home'); //TODO: Ping Test

        $stateProvider
            .state('no-server', {url: '/no-server', templateUrl: 'fragments/no-server.html'})
            .state('home',     {url: '/home', templateUrl: 'fragments/home.html', controller: 'homeCtrl'})
            .state('about',    {url: '/about', templateUrl: 'fragments/about.html', controller: 'aboutCtrl'})
            .state('contact',  {url: '/contact', templateUrl: 'fragments/contact.html', controller: 'contactCtrl'});
    })

    .controller('appCtrl', function($scope, $http, $state){
        console.log('appCtrl Loaded');

        $scope.init = function() {
            $scope.ping();

            $(".nav a").on("click", function(){
                $(".nav").find(".active").removeClass("active");
                $(this).parent().addClass("active");
            });
        };

        $scope.ping = function() {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/ping',
                accept: 'application/json'
            }).then(function successCallback(rep) {
                    $state.go('home');
                }, function errorCallback(err) {
                    $state.go('no-server');
                    setTimeout(function(){$scope.ping();}, 5000);
                }

            );
        };
    });