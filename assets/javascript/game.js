window.onload = function () {

// canvas area for hangman drawing
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var c = Shape.Circle(200,200,50);
c.fillColor = 'green';

paper.view.draw();

//tally panel
var wins = 0;
var losses = 0;
var guessesRemaining = 6;

//guess panel
var topic;
var secretAnswer = [];
var blanks = [];
var letterGuess = "";

//alphabet for letter boxes
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wrestlers = ['rowdy roddy piper','jimmy supafly snuka','hulk hogan','the undertaker','andre the giant','randy savage','stone cold steve austin','ric flair'];

//creates a placeholder for the hidden answer
function makeBlanks() {
	for (i=0; i<secretAnswer.length; i++) {
		blanks[i] = "_";
	}
	$("#guessInput").html(blanks.join(" "));
}



//creates the letter boxes 
for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
	//console.log("here this far");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
	letterBtn.text(alphabet[i]);
	$("#letterBox").append(letterBtn);
};

//creates the secret answer and turns it into an array

$("#topic").on("click", function(){
	secretAnswer = wrestlers[Math.floor(Math.random()*wrestlers.length)];
	console.log(secretAnswer);
	topic = secretAnswer.split("");
	console.log(topic);
	makeBlanks();
	return topic;
});

//select letter from the populated letter boxes

$(".letter").on("click", function (){
	//alert the user if a topic isn't picked first
	if (topic == undefined) {
		alert("Select a topic first!");
	} else {
		var letterGuess = $(this).text();
		console.log(letterGuess);
		if (secretAnswer.includes(letterGuess)) {
			for (var i = 0; topic.length; i++)
				if (topic[i] == letterGuess) {
					blanks[i] = letterGuess;
				}
		}
		else $("#guessesTally").html()
	}
});



}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle

