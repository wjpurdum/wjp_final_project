$(document).ready(function() {
	$('h2').hover(showSectionOne);
		
		function showSectionOne() {
			$("#first-dropdown").slideDown();
			$('h2').addClass('.underline');

		}
	$('h3').hover(showSectionTwo);

		function showSectionTwo() {
			$("#second-dropdown").slideDown();
			$('h3').addClass('.underline');

		}

	$('h4').hover(showSectionThree);

		function showSectionThree() {
			$("#third-dropdown").slideDown();
			$('h4').addClass('.underline');
		}


	$('#image-one').hover(showStoryOne);
		function showStoryOne() {
			$('#image-one').removeClass("grayed-out");
			$('#quote-one').css('color','black');


		}

	$('#image-two').hover(showStoryTwo);
		function showStoryTwo() {
			$('#image-two').removeClass("grayed-out");
			$('#quote-two').css('color','black');


		}

	$('#image-three').hover(showStoryThree);
		function showStoryThree() {
			$('#image-three').removeClass("grayed-out");
			$('#quote-three').css('color','black');


		}

	});

 