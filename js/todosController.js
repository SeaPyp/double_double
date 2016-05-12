angular.module('TodoApp')
  .controller('TodoController', TodoController);

TodoController.$inject = ['TodoFactory'];

function TodoController(TodoFactory){
  var self = this;
  self.api = TodoFactory;
  self.add = add;
  self.list = [];

  self.api.getAllTasks()
    .success(function(data){
      console.log(data);
      self.list = data;
    });

  function add(){
    self.new.isComplete = false;
    console.log(self.new);
    self.api.new(self.new);
    self.list.push(self.new);
    self.new = {};
  }
}
