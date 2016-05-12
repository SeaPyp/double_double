angular.module('TodoApp')
  .controller('TodoController', TodoController);

TodoController.$inject = ['TodoFactory'];

function TodoController(TodoFactory){
  var self = this;
  self.api = TodoFactory;
  self.list = [];

  self.api.getAllTasks()
    .success(function(data){
      console.log(data);
      self.list = data;
    });
}
