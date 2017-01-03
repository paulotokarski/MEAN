var app = angular.module('app', ['ngRoute']);

app.controller('CrudController', ['$scope', '$http', '$q', ($scope, $http, $q) => {
  $scope.data = [];       // Dados recebidos do banco de dados
  $scope.libre = false;   // Abilitar contato para edição

  // Refresh dos dados
  $scope.refresh = () => {
    $scope.promise = $scope.getData();
    $scope.promise.then(
      (res) => {
        $scope.data = res;
      }
    );
  }

  // Receber dados
  $scope.getData = () => {
    var obj = {};
    var q = $q.defer();

    $http.get('/get')
      .success((data) => {
        obj = data;
        q.resolve(obj);
      })
      .error((err) => {
        console.err('ERROR ---> ' + err);
        q.reject('');
      })
      return q.promise;
  }

  // Cadastrar novo contato
  $scope.add = (obj) => {
    $http.post('/add', obj, null).then(
      function(data) {
        $scope.refresh();
      },
      function(err) {
        $scope.refresh();
        console.log('ERROR ---> ' + err);
      }
    );
  }

  // Editar contato existente
  $scope.edit = (obj) => {
    $http.post('/update', obj, null).then(
      function(data) {
        $scope.refresh();
      },
      function(err) {
        $scope.refresh();
        console.log('ERROR ---> ' + err);
      }
    );
  }

  // Deletar contato existente
  $scope.del = (id) => {
    $http.get('/del/:id', id). then(
      function(data)  { $scope.refresh(); },
      function(err)   { $scope.refresh(); console.log('ERROR ---> ' + err); }
    );
  }

  // Abilitar contato para edição
  $scope.toEdit = (obj) => {
    // Materialize jquery -> para o efeito do texto dos inputs
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    $scope.libre = true;
    $scope.contato = obj;
  }

  $scope.refresh();
}]);