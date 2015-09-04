var videoRenderer = (function () {
    var PLAYER_HEIGHT = 400;
    var PLAYER_WIDTH = 400;

    function renderAllVideos(usersVideos) {
        var videos = usersVideos.results;
        var container = $('#users-videos');
        container.html('');

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
            container.prepend(div);

            return new YT.Player(videos.objectId, {
                height: PLAYER_HEIGHT,
                width: PLAYER_WIDTH,
                videoId: videos.videoId
            });

        }

        onYouTubeIframeAPIReady();
    }

    function renderSingleVideo(container, userVideo) {
        function onYouTubeIframeAPIReady() {
            var curplayer = createPlayer(userVideo);
        }

        function createPlayer(video) {
            var div = $('<div>');
            div.attr('id', video.objectId);

            var btn = $('<button>')
                .attr('type', 'button')
                .attr('display', 'inline-block')
                .html('Delete')
                .attr("id","button-delete");
                //.css("display","none");

                btn.attr('class', 'delete-btn')
                .addClass('btn-danger').addClass('btn');

            var outerDiv = $('<div>');
            outerDiv.attr('class', 'video-container-div');
            outerDiv.append(div);
            outerDiv.append(btn);
            container.prepend(outerDiv);

            return new YT.Player(video.objectId, {
                height: PLAYER_HEIGHT,
                width: PLAYER_WIDTH,
                videoId: video.videoId
            });
        }
        onYouTubeIframeAPIReady();
    }

    return {
        renderAllVideos: renderAllVideos,
        renderSingleVideo: renderSingleVideo
    };
})();

$(".video-container-div").on('click',function(){
    $(this).children().last().css("display","inline");
    $(this).childNodes().last().css("display","inline");

    console.log(555);
});

$('iframe').load(function(){
    $(this).contents().find("body").on('click', function(event) { console.log(444)});
});

$('iframe').load(function(){
    $(this).contents().find("body").on('click', function(event) { alert('test'); });
});

//var rightSideBoxes = document.getElementById("users-videos");
//rightSideBoxes.addEventListener('mouseover', function(ev){
//    var target = ev.target;
//    if(target.nodeName == 'IFRAME'){
//        target.nextElementSibling.style.display = 'inline-block';
//        target.style.cursor = 'pointer';
//    }
//},false);