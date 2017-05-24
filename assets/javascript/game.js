window.onload = function () {

//tally panel
var wins = 0;
var losses = 0;
var guessesRemaining = 6;

//guess panel
var topic = "";
var secretAnswer = [];
var blanks = [];

//alphabet for letter boxes
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wrestlers = ['rowdy roddy piper','jimmy supafly snuka','hulk hogan','the undertaker','andre the giant','randy savage','stone cold steve austin','ric flair'];

function makeBlanks() {
	for (i=0; i<secretAnswer.length; i++) {
		blanks[i] = "_";
	}
	$("#guessInput").text(blanks.join(" "));
}

$("#topic").on("click", function(){
	secretAnswer = wrestlers[Math.floor(Math.random()*wrestlers.length)];
	console.log(secretAnswer);
	topic = $(this).text();
	makeBlanks();
});

}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle

