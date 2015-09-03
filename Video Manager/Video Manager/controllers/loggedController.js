var loggedController = (function () {
    var videos;
    validator.changeNavbar(sessionStorage.currentUser);

    $('#logout').show();
    $('#contacts').hide();

    $('#logout').on('click', authentication.logout);

    $('#show-form-btn').on('click', function () {
        var category = $('#show').val();
        console.log(category);
        console.log(videos);
        $('#users-videos').html('');
        var filtered = _.filter(videos, function (video) {
            return video.category == category;
        });

        if (filtered.length !== 0) {
            _.each(filtered, function (video) {
                videoRenderer.renderSingleVideo($('#users-videos'), video);
            })
            $('#users-videos').prepend($('<h5 />').text(category));
        }
        else {
            $('#users-videos').append($('<h5 />').text('There are no videos in such category!'));
        }
    })

    ajaxRequester.getVideos(sessionStorage.userId, showAllVideosInCategories);

    function showAllVideosInCategories(data) {
        videos = data.results;
        var groupedVideos = _.groupBy(videos, 'category');
        $('#users-videos').html('');
        _.each(groupedVideos, function (value, key) {
            var list = $('<div />').text(key).attr('id', key.toLowerCase());
            _.each(value, function (video) {
                videoRenderer.renderSingleVideo($('#users-videos'), video);
            });

            $('#users-videos')
                .prepend($('<h4 />')
                    .css("background-color","#576067")
                    .css("border-radius","10px")
                    .css("font-size","1.5em")
                    .css("border","1px groove grey")
                    .css("box-shadow","7px 7px 4px #1d2428")
                    .css("font-family","'Ubuntu', sans-serif;")
                    .text(key))
                    .css("color","#faebb8");
        });
    }

    $('#add-form-btn').click(function () {
        location.href = '#/logged';

        var url = $("#add-video").val();
        // create video here

        var videoId = videoUrlParser.parse(url);
        var userId = sessionStorage.userId;
        var category = $('#category').val()  || 'Other';

        ajaxRequester.createVideo(userId, videoId, category, videoStorage.setVideoId);

        var videoIdInDatabase = sessionStorage.currentAddedVideo;

        // remove this later
        ajaxRequester.getVideos(userId, showAllVideosInCategories);

    });

    location.href = '#/logged';

})();