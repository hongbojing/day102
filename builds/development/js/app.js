angular
    .module('myApp', [])
    .controller('myController', myController)
;

function myController($http) {
    var vm = this;
    $http.get("http://www.w3schools.com/angular/customers_mysql.php")
        .success(function (response) {vm.names = response.records;});
}