angular.module('TodoApp')
  .controller('TodoController', TodoController);

TodoController.$inject = ['TodoFactory'];

function TodoController(TodoFactory){
  var self = this;
}
