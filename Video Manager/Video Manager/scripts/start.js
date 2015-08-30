var start = (function start() {
    $('#login').click(function () {
        $('.login-div').show();
        $('.buttons').show();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '150px');
        $('.register').hide();
        $('.logged-user').hide();
    });

    $('#contacts').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').show();
        $('.empty').css('height', '100px');
        $('.register').hide();
        $('.logged-user').hide();
    });

    $('#home').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '200px');
        $('.register').hide();
        $('.logged-user').hide();
    });

    $('#register-btn').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '150px');
        $('.register').show();
        $('.logged-user').hide();
    });

    $('#logout').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '200px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#on-log').hide();
        $('#on-start').show();
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
        url = url.replace("watch?v=", "embed/");
        var category = $("#add-dd").val();
        var video = new Video({ title: title, url: url, category: category });
        videoStorage.addVideo(video);

        var container = videoContainersIDs[category];

        $('#' + container).append($('<li><iframe src="' + url + '" frameborder="0" ></iframe></li>'));
    })

    $('#login-btn').on('click', function () {
        authentication.login();
        fillVideos('music-videos', 'music');
        fillVideos('telerik-videos', 'telerik');
    });
    $('#register-form-btn').on('click', authentication.register);

    //$('#usr').val('tea');
    //$('#pwd').val('123');
    //$('#login-btn').click();
}());