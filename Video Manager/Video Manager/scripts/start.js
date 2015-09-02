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

    $('#add-form-btn').click(function() {
        var url = $("#add-video").val();
        // create video here

        var videoId = videoUrlParser.parse(url);
        var userId = sessionStorage.userId;

        ajaxRequester.createVideo(userId, videoId, videoStorage.setVideoId);

        var videoIdInDatabase = sessionStorage.currentAddedVideo;

        // remove this later
        ajaxRequester.getVideos(userId, videoRenderer.renderAllVideos);
    });

    $('#login-btn').on('click', function () {
        // authentication.login();
        // var userId = sessionStorage.userId;
        // ajaxRequester.getVideos(userId, videoRenderer.renderAllVideos);
    });

    $('#register-form-btn').on('click', authentication.register);

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
        $('#above-empty-row').html('');
    });
}());
