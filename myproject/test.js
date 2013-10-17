// define the ytSearch Class
function ytSearch() {
}

ytSearch.prototype.walk = function() {
	alert('I am walking!');
};
ytSearch.prototype.sayHello = function() {
	alert('hello');
};
ytSearch.prototype.sayWords = function(words) {
	alert(words);
};

ytSearch.prototype.mySearch = function(query) {
	var self = this;
	if (query == undefined)
		query = "rick roll";
	// Use the JavaScript client library to create a search.list() API call.
	var request = gapi.client.youtube.search.list({
		part : 'snippet',
		q : query

	});

	// Send the request to the API server,
	// and invoke onSearchRepsonse() with the response.
	request.execute(self.onSearchResponse);
};

//Called automatically with the response of the YouTube API request.
ytSearch.Prototype.onSearchResponse = function(response) {
	this.showFirstID(response);
};

//Helper function to display first id returned
ytSearch.Prototype.getFirstID = function(response) {
	//Get only first result back
	this.firstID = response.items[0].id.videoId;
	return this.firstID;
};

// Helper function to display first id returned
ytSearch.Prototype.showFirstID = function(response) {
	//Get only first result back
	response = this.getFirstID(response);
	document.getElementById('response').innerHTML = response;
};
// define the Student class
function Student() {
	// Call the parent constructor
	ytSearch.call(this);
}

// inherit ytSearch
Student.prototype = new ytSearch();

// correct the constructor pointer because it points to ytSearch
Student.prototype.constructor = Student;

// replace the sayHello method
Student.prototype.sayHello = function() {
	alert('hi, I am a student');
}

// add sayGoodBye method
Student.prototype.sayGoodBye = function() {
	alert('goodBye');
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
	// This API key is intended for use only in this lesson.
	// See http://goo.gl/PdPA1 to get a key for your own applications.
	gapi.client.setApiKey('AIzaSyAlXfqrwNH2Zs3I4dQHROtVHJN2x1Flxug');

	var search = new ytSearch();
	search.sayWords("Nigger");
	search.mySearch(query);
	
//	var student1 = new Student();
//	student1.sayWords("Nigger");
//	student1.walk();
//	student1.sayGoodBye();
	/*
	 * var search = new Search(); search.mysearch("test");
	 */
}
