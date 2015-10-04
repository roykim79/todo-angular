$("#new-todo").focus();

var TodoCtrl = function($scope, $timeout){

    $scope.todos = [
        {
            task: 'Code',
            status: 'doing'
        },
        {
            task: 'Learn Angular JS',
            status: 'doing'
        },
        {
            task: 'Add undo feature',
            status: 'done'
        },
        {
            task: 'Move dashboard to bottom',
            status: 'do'
        },
        {
            task: 'Call Mom - let her know I\'m ok',
            status: 'done'
        }
    ];

    $scope.cachedTodo = null;
    $scope.undoVisible = false;

    $scope.notDone = function(todo){
        return (todo.status != 'done');
    };

    $scope.addTodo = function(el){ 
        if ($scope.newTodo) {
            $scope.todos.push({
                task: $scope.newTodo,
                status: 'do'
            });
        };

        $scope.newTodo = "";

        if ($scope.undoVisible === true) {
            $scope.undoVisible = false;
        }

        return false;
    };

    $scope.removeTodo = function(todo){
        $scope.cachedTodo = todo;

        $scope.todos.splice($scope.todos.indexOf(todo),1);

        $scope.undoVisible = true;

        $timeout(function(){
            $scope.undoVisible = false;
        }, 6000);
        
    
    };

    $scope.undoRemove = function(){
        $scope.todos.push( $scope.cachedTodo );
        $scope.undoVisible = false;
    };

    $scope.updateTodoStatus = function(todo, status){
        todo.status = status;
    };

    // $scope.kyd = function (e) {
    //     console.log(e);
    //     if ($scope.searchTodo === '69') {
    //       console.log("yo");
    //     }
    // };

};



var $searchBar = $("input[ng-model='searchTodo']");

$searchBar.focus(function(){
    $(".glyphicon").addClass("foo");
    $(".search-box").addClass("foo");
});

$searchBar.on("blur",function(){
    $(".glyphicon").removeClass("foo");
    $(".search-box").removeClass("foo");
});












































