var authentication = (function () {
    function setSessionStorage(data) {
        sessionStorage.currentUser = (data.username);
        sessionStorage.sessionToken = (data.sessionToken);
        sessionStorage.userId = (data.objectId);
    }

    function authenticationSuccessForLogin(data) {
        location.href = '#/logged';

        $('#logout').show();

        successLogin();

        setSessionStorage(data);
    }

    function successLogin() {
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
        toastr.success('Login Successed', 'Welcome :)')
    }

    function errorLogin(){
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
        toastr.error('Please, try again','Wrong name or password')
    }

    function errorRegister(){
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
        toastr.warning('Please, try again','Missed something')
    }

    function authenticationFailed(error) {
        errorLogin();
    }

    function errorForRegister(error) {
        errorRegister();
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
            if(username === undefined || password === undefined || username === "" || password === ""){
                errorRegister()
            }

            ajaxRequester.register(username, password, authenticationSuccessForRegistering, errorRegister);
        }
    }

    function logout() {
        delete sessionStorage.currentUser;
        delete sessionStorage.sessionToken;
        delete sessionStorage.userId;
        delete sessionStorage.currentAddedVideo;

        var containter = $('#users-videos');
        containter.html('');
    }

    return {
        login: login,
        register: register,
        logout: logout
    };
}());
