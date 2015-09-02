var authentication = (function() {

    function setSessionStorage(data) {
        sessionStorage.currentUser = (data.username);
        sessionStorage.sessionToken = (data.sessionToken);
        sessionStorage.userId = (data.objectId);
    }

    function authenticationSuccessForLogin(data) {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.register').hide();
        $('.logged-user').show();
        $('.empty').css('height', '50px');
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').text(data.username);
        $('#greeting-span').text(data.username);

        setSessionStorage(data);
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
        $('.register').hide();
        $('.logged-user').show();
        $('#on-log').show();
        $('#on-start').hide();
        $('#user-name').text($('#username').val());
        $('#greeting-span').text($('#username').val());

        setSessionStorage(data);
        sessionStorage.currentUser = $('#username').val();
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

    function logout() {
        delete sessionStorage.currentUser;
        delete sessionStorage.sessionToken;
        delete sessionStorage.userId;
    }

    return {
        login: login,
        register: register,
        logout: logout
    };
}());