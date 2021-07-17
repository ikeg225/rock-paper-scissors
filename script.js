function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random]
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function playRound(input) {
    let weapon = capitalize(input);
    if (computerPlay() == weapon) {
        return "It's a Tie!"
    }else if (computerPlay() == "Rock") {
        if (weapon == "Paper") {
            return "You Win! Paper beats Rock."
        }
        else {
            return "You Lose! Rock beats Scissors."
        }
    }else if (computerPlay() == "Paper") {
        if (weapon == "Scissors"){
            return "You Win! Scissors beats Rock."
        }
        else {
            return "You Lose! Paper beats Rock."
        }
    }else {
        if (weapon == "Rock"){
            return "You Win! Rock beats Scissors."
        }
        else {
            return "You Lose! Scissors beats Paper."
        }
    }

}

function game() {
    let botPoints = 0;
    let playerPoints = 0;
    for (let i = 1; i < 6; i++) {
        let weapon = prompt("Choose your weapon: Rock, Paper, or Scissors! (Round " + i + ")");
        let result = playRound(weapon);
        if (result.includes("Win")) {
            playerPoints++;
        } else {
            botPoints++;
        }
        console.log(result)

    }
    if (playerPoints > botPoints) {
        console.log("Game Over - You Win!")
    } else {
        console.log("Game Over - You Lose!")
    }
}

game()