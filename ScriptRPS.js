let userScore = 0;
let computerScore = 0;
let winMessage = 'Humans Win!';
let loseMessage = 'Computer is better this time!';
let drawMessage = 'its a draw!';


function computerRandom() {
	let computer = Math.floor(Math.random() * 3);
	switch (computer) {
		case 0:
			return 'rock';
			break;

		case 1:
			return 'paper';
			break;

		case 2:
			return 'scissors';
			break;
	}
}

function outcome(userPick, computerPick) {
	if (
		(userPick === 'rock' && computerPick === 'scissors') ||
		(userPick === 'paper' && computerPick === 'rock') ||
		(userPick === 'scissors' && computerPick === 'paper')
	) {
		userScore++;
	} else if (
		(computerPick === 'rock' && userPick === 'scissors') ||
		(computerPick === 'paper' && userPick === 'rock') ||
		(computerPick === 'scissors' && userPick === 'paper')
	) {
		computerScore++;
	}

	if (userScore > computerScore) {
		return winMessage;
	} else if (userScore < computerScore) {
		return loseMessage;
	} else {
		return drawMessage;
	}


}


function game() {
	for (let i = 0; i < 5; i++) {
		
		let computerPick = computerRandom();
		let userPick = prompt('Rock or Paper or Scissor?', '');
		
		const message = outcome(userPick, computerPick);
		console.log(
			`Your Selection: ${userPick.toUpperCase()} | Computer Selection: ${computerPick.toUpperCase()} | Result: ${message}`
		);
		alert(
			`Your Selection: ${userPick.toUpperCase()} \n Computer Selection: ${computerPick.toUpperCase()} \n Result: ${message}`
		);
	}
}

// calling the function to play the game
game();
