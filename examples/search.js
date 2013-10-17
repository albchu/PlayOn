// Once the api loads call enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a given string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(showFirstID);
//  request.execute(function(response) {
//	  var str = JSON.stringify(response.result);
//	  $('#search-container').html('<pre>' + str + '</pre>');
//  });
}


//Helper function to display first id returned
function getFirstID(response) {
	//Get only first result back
	firstID = response.items[0].id.videoId;
	return firstID;
}

//Helper function to display first id returned
function showFirstID(response) {
	//Get only first result back
	response = getFirstID(response);
	//$('#search-container').html('<pre>' + response + '</pre>');
	document.getElementById('response').innerHTML = response;
}