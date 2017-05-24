window.onload = function () {

//tally panel
var wins = 0;
var losses = 0;
var guessesRemaining = 6;

//guess panel
var topic;
var secretAnswer = [];
var blanks = [];

//alphabet for letter boxes
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wrestlers = ['rowdy roddy piper','jimmy supafly snuka','hulk hogan','the undertaker','andre the giant','randy savage','stone cold steve austin','ric flair'];

function makeBlanks() {
	for (i=0; i<secretAnswer.length; i++) {
		blanks[i] = "_";
	}
	$("#guessInput").html(blanks.join(" "));
}

for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
	//console.log("here this far");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
	letterBtn.text(alphabet[i]);
	$("#letterBox").append(letterBtn);
};

$("#topic").on("click", function(){
	secretAnswer = wrestlers[Math.floor(Math.random()*wrestlers.length)];
	console.log(secretAnswer);
	topic = secretAnswer.split("");
	console.log(topic);
	makeBlanks();
});

$(".letter").on("click", function (){
	if (topic == undefined) {
		alert("Select a topic first!");
	} else {
		var letterGuess = $(this).text();
		console.log(letterGuess);

	}
})

}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle

