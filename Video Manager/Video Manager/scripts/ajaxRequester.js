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

    return {
        login: login,
        register: register
    };
})();