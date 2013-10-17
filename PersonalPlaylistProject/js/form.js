$(function() {
	var $songs = $('.songInput');
	$songs.autosize({
		append : "\n"
	});
});

var ytSearchReady = false;
$(document).ready(function() {

	// TESTING CODE
	// var testSongs = new Array("john legend heartbreaker", "kenny travis -
	// american woman", "the xx intro")
	// addSongs(testSongs);
	// END TESTING CODE

	var playlistStatus = "Not Playing";

	// Get playlist status
	$('ul#playlist li').each(function() {

		document.getElementById('playlistStatus').innerHTML += $(this).text();
	})

	// If the user clicks the songs submit button, add songs to list
	$('button#addSongs').click(function() {
		var $songs = $('.songInput');
		var songs = $songs.val().split("\n");
		// Add the songs to the playlist
		addSongs(songs);

        setTimeout(function (){
        	// Check if we need to initiate player
        	var playerStatus = $('#player').css('display'); // The player is hidden
        	// until api loads up
        	var $allSongs = $('#playlist li');
        	var numSongs = $('#playlist li').length;
        	// var playerState = player.getPlayerState();
//		 if (playerStatus != "none")
//		 console.log("hi");
//		 if (numSongs != 0)
//		 console.log("hi");
//		 if (player == undefined)
//		 console.log("hi");
        	if (playerStatus != 'none' && numSongs != 0 && player == undefined) {
        		var firstVideoID = $('#playlist li:nth-child(1)').attr('videoID');
        		playVideo(firstVideoID);
//			 console.log("hi");
        	}
        }, 3000);
	});

});

var addSongToPlaylist = function(videoID, song) {
	$('#playlist').append(
			"<li class='ui-state-default' status='unplayed' videoID='" + videoID + "' id='song'>" + song + "</li>");

};

var markSongPlayed = function(songNumber){
	
};

//Returns the next unplayed song
var nextUnplayedSong = function(songNumber){
	var $allSongs = $('#playlist li');
	for ( var i = 0; i < $allSongs.length; i++) {
		var $song = $('#playlist li:nth-child(' + i + ')');
		var status = $song.attr('status');
		if(status == 'unplayed'){
			return $song.attr('videoID');
		}
		
	}
};

var processSong = function(songNumber){
	//Moves first song to bottom of list
	$("#playlist").sortable({
	    stop: function(event, ui) {
	      $(this).find('#playlist li:nth-child(1)').appendTo(this);
	    }
	});
	
};

//Used for shuffling and looping later on
var markAllUnplayed = function(songNumber){
	
};

var addSongs = function(songs) {

	// var numSongs = $('#playlist li').length;
	// var newSongsCounter = 0;
	for ( var i = 0; i < songs.length; i++) {
		if (songs[i] != '') {
			ytsearch(songs[i]);
			// setTimeout(check, 1000); // check again in a second
//			 var check = function(){
//				 if(($('#playlist li:last-child').attr("videoID")))
//					 break;
//				 else
//					 setTimeout(check, 1000);
//			 };
//			 check();
//			//			
			// document.getElementById('playlistStatus').innerHTML = testvar;
		}
	}

	// //keep looping until all new songs have video IDs
	// for ( var i = 0; i < $allSongs.length; i++) {
	// if (songs[i] != '') {
	// var $aSong = $('#playlist li:nth-child(' + i + ')');
	// if(!$aSong.attr('videoID')){
	// i = 0;
	// }
	// }
	// }

};

$(document).on('mouseenter', 'li#song', function() {
	$(this).fadeTo('fast', 0.5);
});
$(document).on('mouseleave', 'li#song', function() {
	$(this).fadeTo('fast', 1);
});

$(function() {
	$('#playlist').sortable();
	$('#playlist').disableSelection();
});
