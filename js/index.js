$(document).ready(function() {
	
	$('.hamburger').click(showHiddenList);
		function showHiddenList() {
			$(".hidden-list").css('display','block');
		}







			function processForm(event) {
		event.preventDefault();


		var emailAddress = $('input[name="emailAddress"]').val();
		var lovesSpace = $('input[name="lovesSpace"]:checked').val();
		var numberOfAstronauts = $('input[name="astronauts"]:checked').length;
		var planet = $('select[name="planet"]').val();

		if (username === '') {
			$('#errorMessage')
				.html('Please enter a username')
				.removeClass('hide');
		}

		else if (password.length < 8) {
			$('#errorMessage')
				.html('Password must be 8 characters')
				.removeClass('hide');
		}


		else if (emailAddress.indexOf('@') === -1) {
			$('#errorMessage')
				.html('Please provide a valid email address')
				.removeClass('hide');

	});

 