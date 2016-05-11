angular.module('TodoApp')
  .factory('TodoFactory', TodoFactory);

TodoFactory.$inject = ['$http'];

function TodoFactory($http){
  var todoUrl = 'http://localhost:3000/api/todos/';
  var todoFactory = {};

  todoFactory.getAllTasks = function(){
    return $http.get(todoUrl);
  };

  todoFactory.updateOne = function(id, data){
    return $http.patch(todoUrl + id, data);
  };

  todoFactory.new = function(data){
    return $http.post(todoUrl, data);
  }

  todoFactory.destroy = function(id){
    return
  }

  return todoFactory;
}
