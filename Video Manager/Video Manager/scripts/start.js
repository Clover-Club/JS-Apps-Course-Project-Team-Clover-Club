var start = (function start() {
    $('#login').click(function () {
        $('.login-div').show();
        $('.buttons').show();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#contacts').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').show();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#home').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#register-btn').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').show();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#logout').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#on-log').hide();
        $('#on-start').show();
        $('#above-empty-row').html('');
    });

    var videoContainersIDs = { "music": "music-videos", "telerik": "telerik-videos" };
    function fillVideos(container, videoCategory) {
        var resultHTML = '';
        var videos = videoStorage.getVideosByCategory(videoCategory);
        for (var i = 0; i < videos.length; i++) {
            var url = videos[i].getUrl();
            resultHTML += '<li><iframe src="' + url + '" frameborder="0" ></iframe></li>';
        }

        $('#' + container).append($(resultHTML));
    }

    $('#add-form-btn').click(function () {
        var title = $("#add-video-title").val();
        var url = $("#add-video").val();
        // url = url.replace("watch?v=", "embed/");
        // var category = $("#add-dd").val();
        // var video = new Video({ title: title, url: url, category: category });
        // videoStorage.addVideo(video);

        // var container = videoContainersIDs[category];

        // $('#' + container).append($('<li class="video-clip"><iframe src="' + url + '" frameborder="0" ></iframe></li>'));


        // create video here

        var videoId = videoUrlParser.parse(url);
        var userId = sessionStorage.userId;

        ajaxRequester.createVideo(userId, videoId, videoStorage.setVideoId);

        var videoIdInDatabase = sessionStorage.currentAddedVideo;
        console.log(videoIdInDatabase);

        // remove this later
        ajaxRequester.getCurrentVideo(videoIdInDatabase, videoRenderer.renderSingeVideo);
    });

    $('#login-btn').on('click', function () {
        authentication.login();
        // fillVideos('music-videos', 'music');
        // fillVideos('telerik-videos', 'telerik');
    });

    $('#register-form-btn').on('click', authentication.register);

    //$('#usr').val('tea');
    //$('#pwd').val('123');
    //$('#login-btn').click();

    $('#telerik').on('click', function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '50px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').show();
        $('#greeting-span').hide();
        $('#above-empty-row').html('').append($('<h4 />').text('Telerik videos:').css('text-align', 'center')).append($('#telerik-videos').css('padding-left', '100px'));
    });

    $('#music').on('click', function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '50px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').show();
        $('#greeting-span').hide();
        $('#above-empty-row').html('').append($('<h4 />').text('Music:').css('text-align', 'center')).append($('#music-videos').css('padding-left', '100px'));
    });

    $('#user-name').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.register').hide();
        $('.logged-user').show();
        $('.empty').css('height', '50px');
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').show();
        $('#greeting-span').show();
        $('#music-col').append($('#music-videos').css('padding-left', '0px'));
        $('#telerik-col').append($('#telerik-videos').css('padding-left', '0px'));
        $('#above-empty-row').html('');
    });

    $('#container').on('click', '.video-clip', function () {
        var $this = $(this);
        $this.css('width', '500px');
        $this.css('height', '300px');
    });
}());