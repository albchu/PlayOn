
$(function(){
	var $songs = $('.songInput');
	$songs.autosize({append: "\n"});
});

var ytSearchReady = false;
$(document).ready(function(){
	
	//TESTING CODE
//	var testSongs = new Array("john legend heartbreaker", "kenny travis - american woman", "the xx intro")
//	addSongs(testSongs);
	//END TESTING CODE
	
	var playlistStatus = "Not Playing";
	
	//Get playlist status
	$('ul#playlist li').each(function(){
		
		document.getElementById('playlistStatus').innerHTML += $(this).text();
	})
	
	//If the user clicks the songs submit button, add songs to list
	$('button#addSongs').click(function(){
		var $songs = $('.songInput');
		var songs = $songs.val().split("\n");
		addSongs(songs);
	});
})

//Adds the array of songs to the playlist
var addSongs = function(songs){
	
	var $playlist = $('#playlist');
	for(var i=0;i<songs.length;i++){
		if(songs[i] != ''){
			$playlist.append("<li class='ui-state-default' id='song'>" + songs[i] + "</li>");
			ytsearch(songs[i]);
//			document.getElementById('playlistStatus').innerHTML = testvar;
		}
	}
}


$(document).on('mouseenter', 'li#song', function(){
	$(this).fadeTo('fast',0.5);
});
$(document).on('mouseleave', 'li#song', function(){
	$(this).fadeTo('fast',1);
});

$(function() {
	$('#playlist').sortable();
	$('#playlist').disableSelection();
});