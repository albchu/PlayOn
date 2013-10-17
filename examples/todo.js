function TodoCtrl($scope) {
    $scope.todos = [
        {text:"Josh Groban - you raise me up", done:false},
        {text:'Build an app', done:false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };

    $scope.addTodo = function () {
    	var songs = $scope.formTodoText.split("\n");
    	$scope.numSongs = songs.length;
    	for (var i=0;i<$scope.numSongs;i++){
    		if(songs[i] != ''){
    			$scope.todos.push({text:songs[i], done:false});
    		}
    	}
    	$scope.formTodoText = '';
    };
}