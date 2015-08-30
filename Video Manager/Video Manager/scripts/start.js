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

    $('#add-form-btn').click(function () {
        function fillVideos(container, videoCategory) {
            var resultHTML = '';
            var videos = videoStorage.getVideosByCategory(videoCategory);
            for (var i = 0; i < videos.length; i++) {
                resultHTML += '<li>' +
                        videos[i].getTitle() +
                        '</li>';
            }

            document.getElementById(container).innerHTML = resultHTML;
        }

        var videoContainers = { "music": "music-videos", "telerik": "telerik-videos" };
        var title = $("#add-video-title").val();
        var url = $("#add-video").val();
        var category = $("#add-dd").val();
        var video = new Video({ title: title, url: url, category: category });
        videoStorage.addVideo(video);

        var container = videoContainers[category];

        fillVideos(container, category);
    })

    $('#login-btn').on('click', authentication.login);
    $('#register-form-btn').on('click', authentication.register);
}());