var validator = (function() {
    function registerPassword() {
        var password = $('#pass'),
            repatedPassword = $('#pass-repeat');

        if (password === repatedPassword) {
            return true;
        }

        return false;
    }

    function changeNavbar(isLoggedIn) {
        if (isLoggedIn) {
            $('#user-name').show();
            $('#user-name').text(isLoggedIn);
            $('#login').hide();
            $('#contacts').show();
            $('#logout').hide();
        } else {
            $('#user-name').hide();
            $('#login').show();
            $('#contacts').show();
            $('#logout').hide();
        }
    }

    return {
    	registerPassword: registerPassword,
        changeNavbar: changeNavbar
    };
}());