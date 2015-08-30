var videoStorage = (function () {
    key = 'videos';
    function getVideos() {
        return _.map(JSON.parse(localStorage.getItem(key)) || [], function(video) {
            return new Video(video);
        });
    }

    function setVideos(videos) {
        return localStorage.setItem(key, JSON.stringify(videos));
    }

    return {
        addVideo: function (video) {
            var videos = getVideos();
            videos.push(video);
            setVideos(videos);
        },
        removeVideo: function (video) {
            var videos = getVideos();
            videos = _.reject(videos, function (v) {
                return v.id === video.id;
            });

            setVideos(videos);
        },
        getVideosByCategory: function (category) {
            var videosByCategory = [];
            var videos = getVideos();
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].category === category) {
                    videosByCategory.push(videos[i]);
                }
            }

            return videosByCategory;
        }
    };
}());