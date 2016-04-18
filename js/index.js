$(document).ready(function() {
	
	$('.hamburger').click(showHiddenList);
		function showHiddenList() {
			$(".hidden-list").css('display','block');
		}
	

$('#registrationForm').submit(processForm);
	function processForm(event) {
		event.preventDefault();

		
		var emailAddress = $('input[name="emailAddress"]').val();
		

		if (emailAddress.indexOf('@') === -1) {
			$('#errorMessage')
				.html('يرجى تقديم عنوان بريد إلكتروني صالح')
				.removeClass('hide');

		} else if (phone-number === '') {
			$('#errorMessage')
				.html('الرجاء تقديم رقم هاتف صالح')
				.removeClass('hide');


		}

	}

	});

 