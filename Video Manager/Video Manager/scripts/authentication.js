var authentication = (function() {

    function authenticationSuccess(data) {
        console.log(data);
        // TODO: relocate to user videos page
    }

    function authenticationFailed(error) {
        console.log(error);
        // TODO: error message
    }

    function login() {
        var username = $('#usr').val(),
            password = $('pwd').val();

        ajaxRequester.login(username, password, authenticationSuccess, authenticationFailed);
    }

    function register() {
        if (validator.registerPassword) {
            var username = $('#email').val(),
                password = $('#pass').val();

            ajaxRequester.register(username, password, authenticationSuccess, authenticationFailed);
        }
    }

    return {
        login: login,
        register: register
    }
}());