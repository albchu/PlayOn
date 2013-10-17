function TodoCtrl($scope) {
    $scope.todos = [
        {text:"Josh Groban - you raise me up", done:false, firstID:''},
        {text:'Build an app', done:false, firstID:''}
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
    		var aSong = songs[i];
    		if(aSong != ''){
    			search(aSong);
    			var id = getFirstID;
    			$scope.todos.push({text:aSong, done:false, firstID:id});
    		}
    	}
    	$scope.formTodoText = '';
    };
}