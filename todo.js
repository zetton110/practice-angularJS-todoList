angular.module('todoApp',[])
    .controller('TodoListController', function(){
        let todoList = this;
        todoList.todos = [
            {text: 'learn AngularJS', done: true},
            {text: 'build an AngularJS app', done: false}
        ];
        todoList.deleteTodo = function(index) {
            todoList.todos.splice(index,1)
        }
    });