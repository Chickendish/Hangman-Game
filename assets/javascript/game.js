//this will be the javascript for the Hangman-Game

window.onload = function () {

var wins = 0;
var losses = 0;
var lives = 3;
var Wrestlers = ['ric flair','hulk hogan','stone cold steve austin','andre the giant','roddy piper'];
var Painter = ['michelangelo','titian','rafael','botticelli','giorgione','hieronymous bosch']
var cities = ['new york','paris','london','osaka','toyko','mumbai','los angeles','mexico city','jakarta','lagos'];
console.log(cities[4]);

$(".Wrestlers").on("click",function() {
	$(".Wrestlers").fadeOut(3000);
	$
	//console.log("in the function");
});

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0;i < alphabet.length; i++) {
	var letterBtn = $("<button>");
	console.log("here this far");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", alphabet[i]);
	letterBtn.text(alphabet[i]);
	$("#letterBox").append(letterBtn);
};


console.log(alphabet[3]);

}

//Player will need to press any key to begin

//random generator will pick a record in an array
//value from the array will be represented by dashes
//Player will pick letters to solve the puzzle



