var loggedController = (function () {
    validator.changeNavbar(sessionStorage.currentUser);

    $('#logout').show();
    $('#contacts').hide();

    $('#logout').on('click', authentication.logout);

    //ajaxRequester.getVideos(sessionStorage.userId, videoRenderer.renderAllVideos);

    ajaxRequester.getVideos(sessionStorage.userId, showAllVideosInCategories);

    function showAllVideosInCategories(data) {
        var videos = data.results;
        var groupedVideos = _.groupBy(videos, 'category');
        $('#users-videos').html('');
        _.each(groupedVideos, function (value, key) {
            var list = $('<div />').text(key).attr('id', key.toLowerCase());
            _.each(value, function (video) {
                videoRenderer.renderSingleVideo($('#users-videos'), video);
            })

            $('#users-videos').prepend($('<h5 />').text(key));
        })
    }

    $('#add-form-btn').click(function () {
        var url = $("#add-video").val();
        // create video here

        var videoId = videoUrlParser.parse(url);
        var userId = sessionStorage.userId;
        var category = $('#category').val();

        ajaxRequester.createVideo(userId, videoId, category, videoStorage.setVideoId);

        var videoIdInDatabase = sessionStorage.currentAddedVideo;

        // remove this later
        ajaxRequester.getVideos(userId, showAllVideosInCategories);
    });
})();