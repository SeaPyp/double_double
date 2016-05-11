angular.module('TodoApp')
  .factory('TodoFactory', TodoFactory);

TodoFactory.$inject = ['$http'];

function TodoFactory($http){
  var todoFactory = {};

  return todoFactory;
}
