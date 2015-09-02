var loggedController = (function () {
    validator.changeNavbar(sessionStorage.currentUser);

    $('#logout').show();
    $('#contacts').hide();

    $('#logout').on('click', authentication.logout);

    ajaxRequester.getVideos(sessionStorage.userId, videoRenderer.renderAllVideos);

    //ajaxRequester.getVideos(sessionStorage.userId, showAllVideosInCategories);
    //
    //function showAllVideosInCategories(data) {
    //    var videos = data.results;
    //    var filtered = _.filter(videos, 'category');
    //    console.log(filtered);
    //}

    $('#add-form-btn').click(function () {
        var url = $("#add-video").val();
        // create video here

        var videoId = videoUrlParser.parse(url);
        var userId = sessionStorage.userId;
        var category = $('#category').val();

        ajaxRequester.createVideo(userId, videoId, category, videoStorage.setVideoId);

        var videoIdInDatabase = sessionStorage.currentAddedVideo;

        // remove this later
        ajaxRequester.getVideos(userId, videoRenderer.renderAllVideos);
    });
})();