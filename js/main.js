$("#new-todo").focus();

var TodoCtrl = function ($scope) {
  $scope.todos = [
    {
      task: 'Code',
      status: 'doing'
    },
    {
      task: 'Sleep',
      status: 'do'
    }
  ];
  // $scope.todos = [
  //   {
  //     task: 'Code',
  //     status: 'doing'
  //   },
  //   {
  //     task: 'Learn Angular JS',
  //     status: 'done'
  //   },
  //   {
  //     task: 'Add undo feature',
  //     status: 'do'
  //   },
  //   {
  //     task: 'Move dashboard to bottom',
  //     status: 'do'
  //   },
  //   {
  //     task: 'Call Mom - let her know I\'m ok',
  //     status: 'do'
  //   },
    
  // ];

  $scope.notDone = function(todo) {
    return (todo.status != 'done');
  };
  
  $scope.addTodo = function ($event) {   // Add a new todo item
    if ($scope.newTodo) {
      console.log($event);
      $scope.todos.push({
        task: $scope.newTodo,
        status: 'do'
      });
    };
      
    $scope.newTodo = "";
    return false;
  };
  
  $scope.removeTodo = function ($index) {   // Remove a todo item
    
    $scope.todos.splice($index, 1);
    
    return false;
  };

  $scope.updateTodoStatus = function ($index, status, $event) {
    console.log($event);
    console.log(status);
    $scope.todos[$index].status = status;
  };

  $scope.kyd = function (e) {
    console.log(e);
    if ($scope.searchTodo === '69') {
      console.log("yo");
    }
  };
  
};

var $searchBar = $("input[ng-model='searchTodo']");

$searchBar.focus(function(){
  $(".glyphicon").addClass("foo");
  $(".search-box").addClass("foo");
});

$searchBar.on("blur",function(){
  $(".glyphicon").removeClass("foo");
  $(".search-box").removeClass("foo");
  //TodoCtrl.$scope.searchTodo = "";
});












































 