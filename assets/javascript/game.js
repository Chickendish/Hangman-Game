window.onload = function () {

// canvas area for hangman drawing
//paper.install(window);
//paper.setup(document.getElementById('mainCanvas'));

// var c;
// for(var x=25; x<400; x+=50){
// 	for (var y=25; y<400; y+=50){
// 		c=Shape.Circle(x,y,20);
// 		c.fillColor = 'green';
// 	}
// };

// var c = Shape.Circle(200,200,80);
// c.fillColor = 'black';
// var text = new PointText(200,200);
// text.justification = 'center';
// text.fillColor = 'white';
// text.fontSize = 20;
// text.content = 'hello world';

// var tool = new Tool();
//  tool.onMouseDown = function(event) {
//  	var c = Shape.Circle(event.point.x, event.point.y, 20);
//  	c.fillColor = 'green';
//  };

// paper.view.draw();

//tally panel
var wins = 0;
var losses = 0;
var guessesRemaining = 6;
var hasTopic;

//guess panel
var currentAnswer = "";
var lettersInSecretAnswer = [];
var blanksAndLetters = [];
var userGuesses = [];
var currentGuess = "";

//alphabet for letter boxes
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// wrestlers available for secret answer
var wrestlers = ['rowdy roddy piper','jimmy supafly snuka','hulk hogan','the undertaker','andre the giant','randy savage','stone cold steve austin','ric flair'];
//set the guesses remaining to 6

// //creates the letter boxes 
for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
 	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
 	letterBtn.text(alphabet[i]);
 	$("#letterBox").append(letterBtn);
 };

function startGame() {
	$("#guessesRemaining").text(0);
	// set the wins span
	$("#wins").text("Wins: 0");
	//set the losses span
	$("#losses").text("Losses: 0");
}

// //creates a placeholder for the hidden answer
function makeBlanks(array) {
	for (i=0; i<lettersInSecretAnswer.length; i++) {
		if (lettersInSecretAnswer[i] != " ") {
			blanksAndLetters[i] = " ___ ";
		} else {blanksAndLetters[i] = " "}
	}
	$("#guessInput").html(blanksAndLetters.join(""));
 }

 //(1) creates the secret answer and turns it into an array
 	$("#wrestlers").on("click", function(){
  	currentAnswer = wrestlers[Math.floor(Math.random()*wrestlers.length)];
  	// create the two arrays that will be compared to determine a win / loss
  	lettersInSecretAnswer = currentAnswer.split("");
  	blanksAndLetters = currentAnswer.split("");
 	console.log(lettersInSecretAnswer);
  	makeBlanks(lettersInSecretAnswer);
  })

 	startGame();
}
 //selects letter from the populated letter boxes
	// $(".letter").on("click", function(string) {
	// 	alert("You tapped?");
	// })
	// // 	console.log(userGuesses);
	// 	$(this).hide();
	// 	checkMatch(currentAnswer, letterGuess);
	// });

// // After the letter is selected, determine if the letter is in the secret answer
// // otherwise deduct from the guesses remaining tally
// 	function checkMatch(ans, lett) {
//  	if (ans.includes(lett)){
//  		replaceBlanks(ans, lett);
//  	} else {
//  		$("#guessInput").html(guessesRemaining--);
//  	}
//  }

//  	function checkGuesses(ans, guesses) {
//  		for (i=0; i<guesses.length; i++) {
//  			checkMatch(ans, guesses[i])
//  		}
//  	}

//  	function replaceBlanks(ans, lett) {
//  		var rChars = dropSpaces(ans);
//  		var rBlanks = [];
//  	for (i=0; i<rChars.length; i++) {
//  		if (lett === rChars[i] ) {
//  				rBlanks[i] = lett;
//  			} else {
//  				rBlanks[i] = "_";
//  			}
//  	}
//  	$("#guessInput").html(rBlanks.join(" "));
//  	}
// //  //checks the letter for matches
// // 		var letterGuess = $(this).text();
// // 		console.log(letterGuess);
// // 		if (secretAnswer.includes(letterGuess)) {
// // 			for (var i = 0; topic.length; i++)
// // 				if (topic[i] == letterGuess) {
// // 					blanks[i] = letterGuess;
// // 				
// // 		else $("#guessesTally").html()




// /* the game code should reflect that once either all of the guesses are gone
// the player either wins or loses the round. Is this a do-while loop? While (guesses != 0) 
// every round starts with 6 guesses and declines on incorrect guesses (guesses--)but the loop can be broken if player correctly guesses all 
// the letters (wins++).
// LetterBtns are created .on(load) -- these are the elements that will be used for anchoring css 
// and js files

// (1) Player initiates game by .on("click", function(wrestler)){ ...} hasTopic=false; (if / else)
// selected string element from array wrestlers[] becomes current answer - corresponding number of blanks populates 

// (2) Player selects #letterBtn and this initiates the round loop
// if the letter === true the player advances to the next round else loses a guess
// the loop can be broken if the player correctly uses all of the letters or guessesRemaining = 0
// losing the round

// 	letterBtn data-letter is captured and used for evaluation
// 	if (true === letter is included in secret answer) repopulate the element with the mix 
// 	of blanks and selected letters
// 	need to compare letter against a static (global) array initially represented by blanks
// 	if there are spaces in the global array the corresponding index in the blanks array must 
// 	also contain spaces in the representation
// 	the element is populated with blanks, not the array - the array never changes
	



// }

// //Player will need to press any key to begin

// //random generator will pick a record in an array
// //value from the array will be represented by dashes
// //Player will pick letters to solve the puzzle

