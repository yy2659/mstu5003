// Magic Number Guessing Game
var magicNum = Math.ceil(Math.random() * 100);
var userGuess;

function getFeedback(guessedNum, correctNum) {
	if (guessedNum > correctNum) {
		return guessedNum + " is higher than the correct number.";
	} else if (guessedNum < correctNum) {
		return guessedNum + " is lower than the correct number.";
	} else {
		return guessedNum + " matches the correct number! YOU WIN.";
	}
}

while (userGuess !== magicNum) {
	userGuess = Number(prompt('Pick a number between 1-100'));
	alert(getFeedback(userGuess, magicNum));
}
