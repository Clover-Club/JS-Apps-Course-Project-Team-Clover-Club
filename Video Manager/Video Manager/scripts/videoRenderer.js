var videoRenderer = (function() {
	var PLAYER_HEIGHT = 390;
	var PLAYER_WIDTH = 640;

    function renderAllVideos(usersVideos) {
        console.log(usersVideos.results);
        var videos = usersVideos.results;

        // var tag = document.createElement('script');
        // tag.src = "https://www.youtube.com/iframe_api";
        // var firstScriptTag = document.getElementsByTagName('script')[0];
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var containter = document.getElementById('main-container');

        function onYouTubeIframeAPIReady() {
        	console.log(5);
            if (typeof videos === 'undefined')
                return;

            for (var i = 0; i < videos.length; i++) {
                var curplayer = createPlayer(videos[i]);
            }
        }

        function createPlayer(videos) {
            var div = document.createElement('div');
            div.setAttribute('id', videos.objectId);
            containter.appendChild(div);
            return new YT.Player(videos.objectId, {
                height: PLAYER_HEIGHT,
                width: PLAYER_WIDTH,
                videoId: videos.videoId
            });
        }

        onYouTubeIframeAPIReady();
    }

    function renderSingeVideo(userVideo) {
    	console.log(userVideo);
    }

    return {
        renderAllVideos: renderAllVideos,
        renderSingeVideo: renderSingeVideo
    };
})();
