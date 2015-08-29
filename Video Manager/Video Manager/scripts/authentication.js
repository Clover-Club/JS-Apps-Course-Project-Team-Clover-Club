var authentication = (function () {

    function authenticationSuccessForLogin(data) {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '50px');
        $('.register').hide();
        $('.logged-user').show();
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').text(data.username);
        $('#greeting-span').text(data.username);
    }

    function authenticationFailed(error) {
        console.log(error);
        // TODO: error message
    }

    function authenticationSuccessForRegistering(data) {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '50px');
        $('.register').hide();
        $('.logged-user').show();
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').text($('#username').val());
        $('#greeting-span').text($('#username').val());
    }

    function login() {
        var username = $('#usr').val(),
            password = $('#pwd').val();

        ajaxRequester.login(username, password, authenticationSuccessForLogin, authenticationFailed);
    }

    function register() {
        if (validator.registerPassword) {
            var username = $('#username').val(),
                password = $('#pass').val();

            ajaxRequester.register(username, password, authenticationSuccessForRegistering, authenticationFailed);
        }
    }

    return {
        login: login,
        register: register
    };
}());