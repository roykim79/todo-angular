$("#new-todo").focus();

var TodoCtrl = function($scope, $timeout){
    $scope.lists = [
        {
            title: 'Job Hunt',
            openMenu: null,
            todos: [
                {
                    task: 'Learn Angular JS',
                    status: 'doing'
                },
                {
                    task: 'Build awesome single-page todo app',
                    status: 'doing'
                },
                {
                    task: 'Apply to awesome companies',
                    status: 'doing'
                },
                {
                    task: 'Call Mom. let her know I\'m ok',
                    status: 'done'
                }
            ]
        },
        {
            title: 'Todo App features',
            openMenu: null,
            todos: [
                {
                    task: 'Multiple lists',
                    status: 'done'
                },
                {
                    task: 'Remove list feature',
                    status: 'do'
                },
                {
                    task: 'Add undo feature',
                    status: 'done'
                },
                {
                    task: 'Add starring ability',
                    status: 'do'
                },
                {
                    task: 'Add tagging ability',
                    status: 'do'
                },
                {
                    task: 'Add dashboard',
                    status: 'do'
                }
            ]
        },
        {
            title: 'Chores',
            openMenu: null,
            todos: [
                {
                    task: 'Wash dishes',
                    status: 'do'
                },
                {
                    task: 'Fold clothes',
                    status: 'doing'
                },
                {
                    task: 'Vacuum',
                    status: 'done'
                }
            ]
        },
        {
            title: '',
            todos: [
                {
                    task: 'Wash dishes',
                    status: 'do'
                }
            ]
        }
    ];
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
    $scope.curView = 'lists';
    $scope.curList = null;
    $scope.cachedTodo = null;
    $scope.undoVisible = false;

    $scope.notDone = function(todo){
        return (todo.status != 'done');
    };

    $scope.closeMenu = function(){
        if ($scope.curList) {
            var i = $scope.lists.indexOf($scope.curList);

            $scope.lists[i].openMenu = null;
        };
    };

    $scope.addTodo = function(el){ 
        var i = $scope.lists.indexOf($scope.curList);

        if ($scope.newTodo) {
            $scope
              .lists[i]
              .todos
              .push({
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

    $scope.removeTodo = function(list, todo){
        var listIndex = $scope.lists.indexOf(list),
            todoIndex = $scope.lists[listIndex].todos.indexOf(todo);

        $scope.cachedTodo = {
            listIndex: listIndex,
            todo: todo,
            todoIndex: todoIndex
            };

        $scope.lists[listIndex].todos.splice(todoIndex, 1);

        $scope.undoVisible = true;

        $timeout(function(){
            $scope.undoVisible = false;
        }, 6000);
    };

    $scope.toggleMenu = function(todo, $event){
        var i = $scope.lists.indexOf($scope.curList);

        $scope.lists[i].openMenu = todo;

        $event.stopPropagation();
    };

    $scope.undoRemove = function(){
        var cached = $scope.cachedTodo;

        $scope
          .lists[cached.listIndex]
          .todos
          .splice( cached.todoIndex, 0, cached.todo );
        $scope.undoVisible = false;
    };

    $scope.updateStatus = function(todo, status, $event){
        var i = $scope.lists.indexOf($scope.curList);

        todo.status = status;
        $scope.closeMenu();

        $event.stopPropagation();
    };

    $scope.goToList = function(item){
        $scope.curView = 'list';
        $scope.curList = item;
    };

    $scope.goToLists = function(){
        $scope.curView = 'lists';
        $scope.curList = null;
    };

    $scope.log = function(){
        alert('hi');
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
});












































