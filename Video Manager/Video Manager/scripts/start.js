var start = (function start() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    $('#login').click(function() {
        $('.login-div').show();
        $('.buttons').show();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#contacts').click(function() {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').show();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#home').click(function() {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#register-btn').click(function() {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '100px');
        $('.register').show();
        $('.logged-user').hide();
        $('#above-empty-row').html('');
    });

    $('#logout').click(function() {
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

        authentication.logout();
    });

    var videoContainersIDs = {
        "music": "music-videos",
        "telerik": "telerik-videos"
    };

    function fillVideos(container, videoCategory) {
        var resultHTML = '';
        var videos = videoStorage.getVideosByCategory(videoCategory);
        for (var i = 0; i < videos.length; i++) {
            var url = videos[i].getUrl();
            resultHTML += '<li><iframe src="' + url + '" frameborder="0" ></iframe></li>';
        }

        $('#' + container).append($(resultHTML));
    }

    $('#add-form-btn').click(function() {
        var url = $("#add-video").val();
        // create video here

        var videoId = videoUrlParser.parse(url);
        var userId = sessionStorage.userId;

        ajaxRequester.createVideo(userId, videoId, videoStorage.setVideoId);

        var videoIdInDatabase = sessionStorage.currentAddedVideo;
        console.log(videoIdInDatabase);

        // remove this later
        ajaxRequester.getVideos(userId, videoRenderer.renderAllVideos);
    });

    $('#login-btn').on('click', function() {
        authentication.login();
    });

    $('#register-form-btn').on('click', authentication.register);

    $('#telerik').on('click', function() {
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

    $('#music').on('click', function() {
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

    $('#user-name').click(function() {
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

    $('#container').on('click', '.video-clip', function() {
        var $this = $(this);
        $this.css('width', '500px');
        $this.css('height', '300px');
    });
}());
