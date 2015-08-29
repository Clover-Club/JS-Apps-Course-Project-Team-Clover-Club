$('#login').click(function () {
    $('.login-div').show();
    $('.buttons').show();
    $('.main').hide();
    $('.contacts').hide();
    $('.empty').css('height', '150px')
});

$('#contacts').click(function () {
    $('.login-div').hide();
    $('.buttons').hide();
    $('.main').hide();
    $('.contacts').show();
    $('.empty').css('height', '100px')
});