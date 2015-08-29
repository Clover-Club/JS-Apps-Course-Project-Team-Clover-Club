var start = (function start() {
    $('#login').click(function () {
        $('.login-div').show();
        $('.buttons').show();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '150px'),
        $('.register').hide();
        $('.logged-user').hide();
    });

    $('#contacts').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').show();
        $('.empty').css('height', '100px'),
        $('.register').hide();
        $('.logged-user').hide();
    });

    $('#home').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '200px');
        $('.register').hide();
        $('.logged-user').hide();
    });

    $('#register-btn').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').hide();
        $('.contacts').hide();
        $('.empty').css('height', '150px');
        $('.register').show();
        $('.logged-user').hide();
    });

    $('#logout').click(function () {
        $('.login-div').hide();
        $('.buttons').hide();
        $('.main').show();
        $('.contacts').hide();
        $('.empty').css('height', '200px');
        $('.register').hide();
        $('.logged-user').hide();
        $('#on-log').hide();
        $('#on-start').show();
    });

    $('#login-btn').on('click', authentication.login);
    $('#register-form-btn').on('click', authentication.register);
}());