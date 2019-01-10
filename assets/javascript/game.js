var randomResult;
var lost = 0;
var win= 0;
var previous = 0;

var resetAndStart = function () {

$(".crystals").empty ();


randomResult = Math.floor(Math.random() * 69) + 30;

$("#result").html("Random Result: " + randomResult);

for(var i = 0; i <4; i++){

    var random = Math.floor(Math.random() *11) +1;
   
    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random

        });

    $(".crystals").append(crystal); 
}
$("#previous").html("Total Score:", previous);
}



resetAndStart ();


$(document).on("click", ".crystal", function (){
    
var num = parseInt ($(this).attr("data-random"));

previous += num;

$("#previous").html("Total Score:" + previous);

console.log(previous);

if (previous > randomResult){
    lost++;
    $("#lost").html("Loser! =" + lost);
    previous = 0;

    resetAndStart();
}

else if(previous=== randomResult){
    win++;
    $("#win").html("Winning! =" + win);

    previous= 0;

    resetAndStart();
}
});