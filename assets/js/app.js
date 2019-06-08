var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;



var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'assets/images/crystal1.jpg', 
			'assets/images/crystal2.jpg', 
			'assets/images/crystal3.jpg', 
			'assets/images/crystal4.jpg'];
		
	randomResult = Math.floor(Math.random() * 69 ) + 30; 


	$("#result").html('Number to Reach: ' + randomResult).css({"color":"#0F0F11","font-size":"30pt","font-family":'Rochester', 'font-weight':'bolder',"text-align":"center"});
	

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Your Total Score: " + previous);
	$("#previous").css({"color":"#0F0F11","font-size":"30pt","font-family":'Rochester','font-weight':'bolder',"text-align":"center","margin-top":"60px"});
	
}


resetAndStart();



$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > randomResult){

		losses++;

		$("#lost").html("You lost: " + losses).css({"color":"#0F0F11","font-size":"25pt","font-family":'Rochester'});

		previous = 0;

		resetAndStart();

	} 
	else if(previous === randomResult){

		wins++;

		$("#win").html("You win: " + wins).css({"color":"#0F0F11","font-size":"25pt","font-family":'Rochester'});

		previous = 0;

		resetAndStart();

	}

});




