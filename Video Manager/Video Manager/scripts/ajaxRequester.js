var ajaxRequester = (function() {
    var baseUrl = "https://api.parse.com/1/";

    var headers = {
        "X-Parse-Application-Id": "gAceOO7ZUIdjSqZThNMFe0srJnjtFJNjvF8AFUJj",
        "X-Parse-REST-API-Key": "chWbl0x31tPEzjz3U9pid71aZWnXpoMDDRGLuB7T"
    };


    function login(username, password, success, error) {
        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: baseUrl + "login",
            data: {
                username: username,
                password: password
            },
            success: success,
            error: error
        });
    }

    function register(username, password, success, error) {
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "users",
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: success,
            error: error
        });
    }

    function createVideo(userId, idVideo, providedCategory, success, error) {
        var videoObject = {
            videoId: idVideo,
            userVideo: {
                __type: "Pointer",
                className: "_User",
                objectId: userId
            },
            category: providedCategory
        };

        if(videoObject.videoId === "" || videoObject.videoId === undefined){
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "200",
                "hideDuration": "3000",
                "timeOut": "2000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            toastr.warning('Please, try again', 'Missed something');
            return;
        }

        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "classes/Video",
            contentType: 'application/json',
            data: JSON.stringify(videoObject),
            success: success,
            error: error
        });
    }

    function getVideos(userId, success, error) {
        var params = '{"userVideo":{"__type":"Pointer","className":"_User","objectId":"' + userId + '"}}';

        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: baseUrl + "classes/Video",
            data: {
                "where": params
            },
            success: success,
            error: error
        });
    }

    function getCurrentVideo(videoId, success, error) {
        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: baseUrl + "classes/Video/" + videoId,
            success: success,
            error: error
        });
    }

    function deleteVideo(videoId, success, error) {
        jQuery.ajax({
            method: "DELETE",
            headers: headers,
            url: baseUrl + "classes/Video/" + videoId,
            success: success,
            error: error
        });
    }

    return {
        login: login,
        register: register,
        createVideo: createVideo,
        getVideos: getVideos,
        getCurrentVideo: getCurrentVideo,
        deleteVideo: deleteVideo
    };
})();