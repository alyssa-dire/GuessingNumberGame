function guessGame() {
	var userGuess = confirm("Are you ready to play?");

	if (userGuess == 1) {
		var number = prompt("Guess a number between 1 and 100:");
			var guess = 1 + Math.floor(Math.random() * 100);			
			test(number, guess);
	} 
	else {
		alert("Game over.");
	}
}

function test(number, guess) {
	for (i = 1; i < 4; i++) {
			if (number == guess) {
					alert("Your guess was correct!");
					return;
			} 
			else if (i == 3) {
					alert("You lose! Better luck next time. The number was " + guess + ".");
			} 
			else {
					number = prompt("Try again!");
			}
	}
}


