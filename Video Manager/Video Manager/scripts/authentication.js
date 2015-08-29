var authentication = (function() {
    $('#login-btn').on('click', login);

    function login() {
    	var username = $('#usr').val();
    	var password = $('pwd').val();

    	ajaxRequester.login(username, password, authenticationPassed, authenticationFailed);

    	// TODO: Change this later
    	function authenticationPassed(data) {
    		console.log(data);
    	}

    	function authenticationFailed(error) {
    		console.log(error);
    	}
    }
}());