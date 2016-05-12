angular.module('TodoApp')
  .controller('TodoController', TodoController);

TodoController.$inject = ['TodoFactory'];

function TodoController(TodoFactory){
  var self = this;
  self.api = TodoFactory;
  self.list = [];
  self.add = add;
  self.remove = remove;

  self.api.getAllTasks()
    .success(function(data){
      console.log(data);
      self.list = data;
    });

  function add(){
    self.new.isComplete = false;
    self.api.new(self.new)
      .success(function(data){
        self.api.getAllTasks()
          .success(function(data){
            self.list = (data);
            self.new = {};
          });
      });
    // self.list.push(self.new);
  }

  function remove(item){
    var id = item._id;
    self.api.destroy(id)
      .success(function(data){
        self.api.getAllTasks()
          .success(function(tasks){
            self.list = tasks;
          });
      });
  }
}
