//this will be the javascript for the Hangman-Game

window.onload = function () {

//game tally

var wins = 0;
var losses = 0;
var lives = 3;

//topic arrays
var Wrestlers = ['ric flair','hulk hogan','stone cold steve austin','andre the giant','roddy piper'];
var Painters = ['michelangelo','titian','rafael','botticelli','giorgione','hieronymous bosch'];
var Cities = ['new york','paris','london','osaka','toyko','mumbai','los angeles','mexico city','jakarta','lagos'];

//game pieces
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

// user picks a topic

$(".Wrestlers").on("click",function(topic) {
	var secretAnswer = Wrestlers[Math.floor(Math.random()*Wrestlers.length)];
	console.log(secretAnswer);
	$(".Painter").fadeOut(3000);
	$(".Cities").fadeOut(3000);

});

$(".Painters").on("click",function(topic) {
	var secretAnswer = Painters[Math.floor(Math.random()*Painters.length)];
	console.log(secretAnswer);
	$(".Wrestlers").fadeOut(3000);
	$(".Cities").fadeOut(3000);
	
});

$(".Cities").on("click",function(topic) {
	var secretAnswer = Cities[Math.floor(Math.random()*Cities.length)];
	console.log(secretAnswer);
	$(".Painters").fadeOut(2000);
	$(".Wrestlers").fadeOut(2000);
	
});

for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
	console.log("here this far");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
	letterBtn.text(alphabet[i]);
	$("#letterBox").append(letterBtn);
};

$(letterBtn).on("click",function(selectLetter) {
	console.log(letterBtn);
});

console.log(alphabet[3]);

}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle



