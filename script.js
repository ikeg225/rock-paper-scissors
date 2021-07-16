function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random]
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function playRound(input) {
    let weapon = capitalize(playerSelection);
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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));