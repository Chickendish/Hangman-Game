window.onload = function () {

//game tally

var wins = 0;
var losses = 0;
var lives = 3;

//topic arrays
var Wrestlers = ['ric flair','hulk hogan','stone cold steve austin','andre the giant','roddy piper'];
var Painters = ['michelangelo','titian','rafael','botticelli','giorgione','hieronymous bosch'];
var Cities = ['new york','paris','london','osaka','toyko','mumbai','los angeles','mexico city','jakarta','lagos'];

// checks if a topic has been selected
var topic;
// this should live outside the click functions so we can reference it from anywhere (remember the scope discussion)
var secretAnswer
// hold the blanks
var blanks = [];

var blanksArray = [];

// create the array of blanks
function makeBlanks() {
	for (i=0; i<secretAnswer.length; i++) {
		blanks[i] = "_";
	}
	$("#guessInput").text(blanks.join(" "));
}

//game pieces
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

// user picks a topic
// These could be streamlined, but works fine as three different functions
$(".Wrestlers").on("click",function() {
	// only select a topic if one hasn't been picked already
	if (topic == undefined) {
		secretAnswer = Wrestlers[Math.floor(Math.random()*Wrestlers.length)];
		console.log(secretAnswer);
		$(".Painter").fadeOut(3000);
		$(".Cities").fadeOut(3000);
		// set the topic to the button's text
		topic = $(this).text();
		makeBlanks();
	}

});

$(".Painters").on("click",function() {
	if (topic == undefined) {
		secretAnswer = Painters[Math.floor(Math.random()*Painters.length)];
		console.log(secretAnswer);
		$(".Wrestlers").fadeOut(3000);
		$(".Cities").fadeOut(3000);
		topic = $(this).text();
		makeBlanks();
	}
});

$(".Cities").on("click",function() {
	if (topic == undefined) {
		secretAnswer = Cities[Math.floor(Math.random()*Cities.length)];
		console.log(secretAnswer);
		$(".Painters").fadeOut(3000);
		$(".Wrestlers").fadeOut(3000);
		topic = $(this).text();
		makeBlanks();
	}
	
});

for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
	letterBtn.text(alphabet[i]);
	$("#letterBox").append(letterBtn);
};

$(".letter").on("click",function() {
	// if no topic picked, alert the user
	if (topic == undefined) {
		alert("Select a topic!");
	} else {
		// if a topic has been picked, start checking the letters
		var letterGuess = $(this).text();
		console.log(letterGuess);

		if (secretAnswer.includes(letterGuess)) {
			console.log("That letter is in the word");
			for (i = 0; i < secretAnswer.length; i++) {
				secretAnswer.split("") = blanksArray[];

				//turn secretAnswer into an array (new variable)
				//make a another new array (blanksArray) []
				//for loops - blanksArray.push("_")
				// 1 to 1 correspondence between blanksArray and secretAnswer

			}
		}

		else {
			losses++;
		}
		//if $(letterGuess == secretAnswer):

		//1. compare letterGuess to secretAnswer [hint: use .includes()]

		//2. if correct, change the same index of blanks as the correct index of secretAnswer

		//3. if wrong, decrement lives

		//4. if word is guess, win++

		//5. if no lives, losses++

	}
});

}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle

