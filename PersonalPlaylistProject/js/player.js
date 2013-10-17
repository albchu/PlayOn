var player;
function onYouTubeIframeAPIReady() {
	$('#playerStatus').text("Youtube player is ready");
	$('#player').css("display","block");
//	playVideo("sV4_wHvP7b8");
}

function playVideo(videoID) {

	player = new YT.Player('player', {
		height : '200',
		width : '200',
		videoId : videoID,
		events : {
			'onReady' : onPlayerReady,
			'onStateChange' : onPlayerStateChange
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
	//If video is over, play next
	if (event.data == YT.PlayerState.ENDED) {
		player.stopVideo();
		processSong();
		playVideo(nextUnplayedSong());
	}
}
function stopVideo() {
	player.stopVideo();
}