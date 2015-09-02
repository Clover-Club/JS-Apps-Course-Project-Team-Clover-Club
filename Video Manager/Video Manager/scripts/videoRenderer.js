var videoRenderer = (function() {
    var PLAYER_HEIGHT = 400;
    var PLAYER_WIDTH = 400;

    function renderAllVideos(usersVideos) {
        var videos = usersVideos.results;
        var containter = $('#users-videos');
        containter.html('');

        function onYouTubeIframeAPIReady() {
            if (typeof videos === 'undefined')
                return;

            for (var i = 0; i < videos.length; i++) {
                var curplayer = createPlayer(videos[i]);
            }
        }

        function createPlayer(videos) {
            var div = $('<div>');
            div.attr('id', videos.objectId);
            containter.prepend(div);
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