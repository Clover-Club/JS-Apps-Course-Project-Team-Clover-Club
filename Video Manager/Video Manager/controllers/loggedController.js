var loggedController = (function() {
	validator.changeNavbar(sessionStorage.currentUser);

	$('#logout').show();
	$('#contacts').hide();

	$('#logout').on('click', authentication.logout);
})();