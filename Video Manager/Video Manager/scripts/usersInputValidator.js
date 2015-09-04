var validator = (function () {
    function validateUsernameAndPassword(username, password) {
        validateUsername(username);
        validatePassword(password);
    }

    function checkPasswordConfirmation(password, confirmationPassword) {
        validatePassword(password);
        if (password !== confirmationPassword) {
            throw new Error('Passwords validation failed.');
        }
    }

    function validateUsername(username) {
        if (typeof username !== 'string' || !/\w{3,}/.test(username)) {
            throw new Error('The username contains either invalid character or is too short.');
        }
    }

    function validatePassword(password) {
        if (typeof password !== 'string' || !password || !/[\w!@#$%^&*]{3,}/.test(password)) {
            throw new Error('The password contains either invalid character or is too short.');
        }
    }

    function changeNavbar(isLoggedIn) {
        if (isLoggedIn) {
            $('#user-name').show();
            $('#user-name').text(isLoggedIn);
            $('#login').hide();
            $('#contacts').show();
            $('#logout').hide();
            $('#greeting-span').text(isLoggedIn);
        } else {
            $('#user-name').hide();
            $('#login').show();
            $('#contacts').show();
            $('#logout').hide();
        }
    }

    return {
        validateUsernameAndPassword: validateUsernameAndPassword,
        checkPasswordConfirmation: checkPasswordConfirmation,
        changeNavbar: changeNavbar
    };
}());