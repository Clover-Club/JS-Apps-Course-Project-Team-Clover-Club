var validator = (function() {
    function registerPassword() {
        var password = $('#pass'),
            repatedPassword = $('#pass-repeat');

        if (password === repatedPassword) {
            return true;
        }

        return false;
    }

    return {
    	registerPassword: registerPassword
    }
}());