alert('See if you can click the correct pictures to equal 76!')

//Pictures from left to right
var pic1 = 10;
var pic2 = 20;
var pic3 = 3;
var pic4 = 6;
var imageCrystal = $('<img>')
var userGuess = '';


//when the document loads this function will happen
$(document).ready(function() {
	//when picture one is clicked
	$('.pic1').click(function() {
		//the text fom variable prints as userGuess
		$('#userGuess').text(pic1);

	});
});

$(document).ready(function() {
	$('.pic2').click(function() {
		$('#userGuess').text(pic2);

	});
});

$(document).ready(function(){
	$('.pic3').click(function(){
		$('#userGuess').text(pic3)		
	});
});

$(document).ready(function(){
	$('.pic4').click(function(){
		$('#userGuess').text(pic4)		
	});
});

