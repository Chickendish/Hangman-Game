window.onload = function () {

// canvas area for hangman drawing
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

// var c;
// for(var x=25; x<400; x+=50){
// 	for (var y=25; y<400; y+=50){
// 		c=Shape.Circle(x,y,20);
// 		c.fillColor = 'green';
// 	}
// };

var c = Shape.Circle(200,200,80);
c.fillColor = 'black';
var text = new PointText(200,200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

var tool = new Tool();
 tool.onMouseDown = function(event) {
 	var c = Shape.Circle(event.point.x, event.point.y, 20);
 	c.fillColor = 'green';
 };

paper.view.draw();

//tally panel
var wins = 0;
var losses = 0;
var guessesRemaining = 6;

//guess panel
var secretAnswer = "";
var lettersInSecretAnswer = [];
var numBlanks = 0;
var blanksAndLetters = [];
var blanks = [];
var letterGuess = "";

//alphabet for letter boxes
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// wrestlers available for secret answer
var wrestlers = ['rowdy roddy piper','jimmy supafly snuka','hulk hogan','the undertaker','andre the giant','randy savage','stone cold steve austin','ric flair'];
//set the guesses remaining to 6

function startGame() {
	$("#guessesRemaining; ").text(0);
	// set the wins span
	$("#wins").text("Wins: 0");
	//set the losses span
	$("#losses").text("Losses: 0");
}

// //creates a placeholder for the hidden answer
function makeBlanks() {
 	for (i=0; i<numBlanks; i++) {
 		blanks[i] = "_";
 	}
 	$("#guessInput").html(blanks.join(" "));
 }


// //creates the letter boxes 
for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
	console.log("here this far");
 	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
 	letterBtn.text(alphabet[i]);
 	$("#letterBox").append(letterBtn);
 };

// //creates the secret answer and turns it into an array
 	$("#topic").on("click", function(){
  	secretAnswer = wrestlers[Math.floor(Math.random()*wrestlers.length)];
  	console.log(secretAnswer);
  	lettersInSecretAnswer = secretAnswer.split("");
 	numBlanks = lettersInSecretAnswer.length;
 	console.log(lettersInSecretAnswer);
  	makeBlanks();
  });

// selects letter from the populated letter boxes
	$(".letter").on("click", function() {
		alert($(this).attr("data-letter"));
		
	});
 // checks the letter for matches
// 		var letterGuess = $(this).text();
// 		console.log(letterGuess);
// 		if (secretAnswer.includes(letterGuess)) {
// 			for (var i = 0; topic.length; i++)
// 				if (topic[i] == letterGuess) {
// 					blanks[i] = letterGuess;
// 				}
// 		}
// 		else $("#guessesTally").html()
// 	}
// });



}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle

