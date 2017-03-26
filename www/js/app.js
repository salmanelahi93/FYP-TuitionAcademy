// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})


  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'view/home.html',
        controller: 'homeCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
      })

      .state('registration', {
        url: '/registration',
        templateUrl: 'view/registration.html',
        controller: 'registrationCtrl'
      })

      .state('tutlist', {
        url: '/tutlist',
        templateUrl: 'view/tutlist.html',
        controller: 'tutlistCtrl'
      })

      .state('stdlist', {
        url: '/stdlist',
        templateUrl: 'view/stdlist.html',
        controller: 'stdlistCtrl'
      })

      .state('student', {
        url: '/student',
        templateUrl: 'view/student.html',
        controller: 'studentCtrl'
      })

      .state('tutor', {
        url: '/tutor',
        templateUrl: 'view/tutor.html',
        controller: 'tutorCtrl'
      })

      .state('studentProfile', {
        url: '/studentProfile',
        templateUrl: 'view/studentProfile.html',
        controller: 'studentProfileCtrl'
      });

      $urlRouterProvider.otherwise('/home');
  })


.controller('studentProfileCtrl',function(){

  })


.controller('homeCtrl', function($scope){

      console.log("Home controller");

  } )

.controller('loginCtrl', function($scope){


} )

//.controller('registrationCtrl', function(){
//} )

  .controller('stdlistCtrl', function($scope, $ionicPopup, $rootScope, $cordovaSocialSharing, $cordovaBarcodeScanner){


    // Social Media Sharing
    $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
    };

   /* $scope.shareViaTwitter = function(message, image, link) {
      $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
        $cordovaSocialSharing.shareViaTwitter(message, image, link);
      }, function(error) {
        alert("Cannot share on Twitter");
      });
    };*/

    // Barcode Scanning
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };
    // Check to retrieve all data in tutlistCtrl
    console.log("Student list controller");

    var ref = new Firebase("https://tocipractise.firebaseio.com/");

    ref.on("value", function(snapshot){
      console.log(snapshot.val());
      $scope.demo = snapshot.val();
      // $scope.$apply();
    });


    $scope.showAlert = function(xyz) {

      var alertPopup = $ionicPopup.alert({
        title: 'Details',
        template: "<table>" +
        "<tr>" +
        "<td>Cell: </td>" +
        "<td>" + xyz.Cell + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Age: </td>" +
        "<td>" + xyz.Age + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>CNIC: </td>" +
        "<td>" + xyz.CNIC + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Address: </td>" +
        "<td>" + xyz.Address + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Degree: </td>" +
        "<td>" + xyz.Degree + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Discipline: </td>" +
        "<td>" + xyz.Discipline + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Email: </td>" +
        "<td>" + xyz.Email + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" +
        "<a href='https://www.google.com/maps/dir//Pakistan/@30.082557,60.3305012,5z/data=!4m16!1m7!3m6!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2sPakistan!3b1!8m2!3d30.375321!4d69.345116!4m7!1m0!1m5!1m1!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2m2!1d69.345116!2d30.375321'>Location</a>" +
        "</td>" +
        "</tr>" +

        "</table>"

      });

      // document.getElementById("map").onclick = window.location='https://www.google.com/maps/dir//Pakistan/@30.082557,60.3305012,5z/data=!4m16!1m7!3m6!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2sPakistan!3b1!8m2!3d30.375321!4d69.345116!4m7!1m0!1m5!1m1!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2m2!1d69.345116!2d30.375321';
    };

    $scope.abc = function(xyz){

      $scope.showAlert(xyz);
      console.log(xyz);
    };

    $scope.rating = {};
    $scope.rating.rate = 3;
    $scope.rating.max = 5;

  } )

  .controller('tutlistCtrl', function($scope, $ionicPopup, $rootScope, $cordovaSocialSharing, $cordovaBarcodeScanner){

    // Social Media Sharing
    $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
    };

    $scope.shareViaTwitter = function(message, image, link) {
      $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
        $cordovaSocialSharing.shareViaTwitter(message, image, link);
      }, function(error) {
        alert("Cannot share on Twitter");
      });
    };

    // Barcode Scanning
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };

    // Check to retrieve all data in tutlistCtrl
    console.log("tutor list controller");

    var ref = new Firebase("https://tocipractise.firebaseio.com/");

    ref.on("value", function(snapshot){
      console.log(snapshot.val());
      $scope.demo = snapshot.val();
      // $scope.$apply();
    });


    $scope.showAlert = function(xyz) {

      var alertPopup = $ionicPopup.alert({
        title: 'Details',
        template: "<table>" +
        "<tr>" +
        "<td>Cell: </td>" +
        "<td>" + xyz.Cell + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Age: </td>" +
        "<td>" + xyz.Age + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>CNIC: </td>" +
        "<td>" + xyz.CNIC + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Address: </td>" +
        "<td>" + xyz.Address + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Degree: </td>" +
        "<td>" + xyz.Degree + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Discipline: </td>" +
        "<td>" + xyz.Discipline + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Email: </td>" +
        "<td>" + xyz.Email + "</td>" +
        "</tr>" +
          "<tr>" +
        "<td>" +
        "<a href='https://www.google.com/maps/dir//Pakistan/@30.082557,60.3305012,5z/data=!4m16!1m7!3m6!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2sPakistan!3b1!8m2!3d30.375321!4d69.345116!4m7!1m0!1m5!1m1!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2m2!1d69.345116!2d30.375321'>Location</a>" +
        "</td>" +
        "</tr>" +

        "</table>"

      });

     // document.getElementById("map").onclick = window.location='https://www.google.com/maps/dir//Pakistan/@30.082557,60.3305012,5z/data=!4m16!1m7!3m6!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2sPakistan!3b1!8m2!3d30.375321!4d69.345116!4m7!1m0!1m5!1m1!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!2m2!1d69.345116!2d30.375321';
    };

    $scope.abc = function(xyz){

      $scope.showAlert(xyz);
      console.log(xyz);
    };

    $scope.rating = {};
    $scope.rating.rate = 3;
    $scope.rating.max = 5;

  } )

.controller('studentCtrl', function(){

} )
  .controller('tutorCtrl', function(){


  } )

.controller('registrationCtrl', function ($scope) {

      console.log("Registation by salman");

  $scope.provinces= [
    { name: 'Sindh', value: 'sindh' },
    { name: 'Punjab', value: 'punjab'},
    {name: 'Balochistan', value: 'balochistan'},
    {name: 'KPK', value: 'kpk'},
    {name: 'Baltistan', value: 'baltistan'},
    {name: 'kashmir', value: 'kashmir'}
  ];

$scope.SindhCities = [
  { name: 'Karachi', value: 'karachi' },
  { name: 'Hyderabad', value: 'hyderabad'},
  {name: 'Sukkur', value: 'sukkur'},
  {name: 'Mirpur Khas', value: 'mirpur_khas'},
  {name: 'Larkana', value: 'larkana'}
];


    $scope.PunjabCities = [
      { name: 'Lahore', value: 'lahore' },
      { name: 'Islamabad', value: 'islamabad'},
      {name: 'Rawalpindi', value: 'rawalpindi'},
      {name: 'Multan', value: 'multan'},
      {name: 'Faisalabad', value: 'faisalabad'}
    ];


    $scope.BalochistanCities = [
      { name: 'Quetta', value: 'quetta' },
      { name: 'Ziarat', value: 'ziarat'},
      {name: 'Gawadar', value: 'gawadar'},
      {name: 'Khuzdar', value: 'khuzdar'},
      {name: 'Sibi', value: 'sibi'}
    ];


    $scope.KpkCities = [
      { name: 'Peshawar', value: 'peshawar' },
      { name: 'Dera Ismail Khan', value: 'dera_ismail_khan'},
      {name: 'Mardan', value: 'maradan'},
      {name: 'Kohat', value: 'kohat'},
      {name: 'Charsadda', value: 'charsadda'}
    ];

    $scope.BaltistanCities = [
      { name: 'Gilgit', value: 'gilgit' },
      { name: 'Skardu', value: 'skardu'},
      {name: 'Chilas', value: 'chilas'},
      {name: 'Astore', value: 'astore'},
      {name: 'Askole', value: 'askole'}
    ];


    $scope.KashmirCities = [
      { name: 'Mirpur', value: 'mirpur' },
      { name: 'Muzaffarabad', value: 'muzaffarabad'},
      {name: 'Rawalakot', value: 'rawalkot'},
      {name: 'Kotli', value: 'kotli'},
      {name: 'Kohala', value: 'kohala'}
    ];

    $scope.Degree = [
      { name: 'Matriculation', value: 'matric' },
      { name: 'Intermediate', value: 'inter'},
      {name: 'Bachelor', value: 'bachelor'},
      {name: 'Master', value: 'master'}

    ];

    $scope.Matric = [
      { name: 'Arts', value: 'arts' },
      { name: 'Commerce', value: 'commerce'},
      {name: 'Computer', value: 'computer'},
      {name: 'Biology', value: 'biology'}

    ];

    $scope.Inter = [
      { name: 'Arts', value: 'arts' },
      { name: 'Commerce', value: 'commerce'},
      {name: 'Pre-Engineering', value: 'pre-engineering'},
      {name: 'Pre-Medical', value: 'pre-medical'}

    ];

    $scope.Bachelor = [
      { name: 'Arts', value: 'arts' },
      { name: 'Commerce', value: 'commerce'},
      {name: 'Engineering', value: 'engineering'},
      {name: 'Medical', value: 'medical'},
      {name: 'Science', value: 'science'},
      {name: 'business', value: 'business'}

    ];

    $scope.Master = [
      { name: 'Arts', value: 'arts' },
      { name: 'Commerce', value: 'commerce'},
      {name: 'Engineering', value: 'engineering'},
      {name: 'Medical', value: 'medical'},
      {name: 'Science', value: 'science'},
      {name: 'Business', value: 'business'}

    ];

    $scope.Program = [
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no'}

    ];

    $scope.Matric_class = [
      { name: '1', value: 'class1' },
      { name: '2', value: 'class2'},
      {name: '3', value: 'class3'},
      {name: '4', value: 'class4'},
      {name: '5', value: 'class5'},
      {name: '6', value: 'class6'},
      {name: '7', value: 'class7'},
      {name: '8', value: 'class8'},
      {name: '9', value: 'class9'},
      {name: '10', value: 'class10'}
    ];

    $scope.Inter_class = [
      { name: '1st', value: 'year1' },
      { name: '2nd', value: 'year2'}
  ];

    $scope.Bachelor_class = [
      { name: '1st', value: 'year1' },
      { name: '2nd', value: 'year2'},
      { name: '3rd', value: 'year3'},
      { name: '4th', value: 'year4'}
    ];

    $scope.Master_class = [
      { name: 'Previous', value: 'previous' },
      { name: 'Final', value: 'final'}

    ];

    $scope.Commerce_class = [
      { name: '1', value: 'part1' },
      { name: '2', value: 'part2'}
    ];

});





