var authentication = (function () {
    function setSessionStorage(data) {
        sessionStorage.currentUser = (data.username);
        sessionStorage.sessionToken = (data.sessionToken);
        sessionStorage.userId = (data.objectId);
    }

    function authenticationSuccessForLogin(data) {
        location.href = '#/logged';

        $('#logout').show();

        setSessionStorage(data);
    }

    function authenticationFailed(error) {
        console.log(error);
        // TODO: error message
    }

    function authenticationSuccessForRegistering() {
        location.href = '#/successRegister';
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

        var containter = $('#users-videos');
        containter.html('');
    }

    return {
        login: login,
        register: register,
        logout: logout
    };
}());
