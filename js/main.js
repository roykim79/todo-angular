$("#new-todo").focus();

var TodoCtrl = function ($scope) {
  $scope.todos = [];
  
  $scope.addTodo = function () {   // Add a new todo item
    $scope.todos.push({
      task: $scope.newTodo,
      status: 'do'
    });

    $scope.newTodo = "";
    return false;
  };
  
  $scope.removeTodo = function ($index) {   // Remove a todo item
    
    $scope.todos.splice($index, 1);
    
    return false;
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
// $searchBar.keydown(function(){
//   if (event.keyCode === 27) {
//     $searchBar.trigger("blur");
//     $("#new-todo").focus();
//   }
// });
 