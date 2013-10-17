// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
	gapi.client.load('youtube', 'v3', function() {
		handleAPILoaded();
	});
    gapi.client.setApiKey('AIzaSyAlXfqrwNH2Zs3I4dQHROtVHJN2x1Flxug');
}