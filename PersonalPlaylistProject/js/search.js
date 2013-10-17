// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    var videoID = getFirstID(response);
    
    //Get last song and append the video id
    $('#playlist li:last-child').attr("videoID", videoID);
    
    document.getElementById('response').innerHTML = videoID;
//    document.getElementById('response').innerHTML = responseString;
}

//Helper function to display first id returned
function getFirstID(response) {
	//Get only first result back
	firstID = response.items[0].id.videoId;
	return firstID;
}
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    $('button#addSongs').attr('disabled', false);
    $('button#addSongs').text("Add Songs!");
//    ytsearch();
}

function ytsearch(query) {
	if(query == undefined){
		query = 'big booty bitches';
	}
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query
        
    });
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}