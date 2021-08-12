const buttons = document.querySelectorAll('button');

function robotPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random]
};

function playRound(input) {
    robot = robotPlay();

    if (robot == input) {
        document.getElementById("winLose").innerHTML = "It's a Tie!"
    } else if (robot == "Rock") {
        if (input == "Paper") {
            document.getElementById("winLose").innerHTML = "You Win! Paper beats Rock."
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Rock beats Scissors."
        }
    } else if (robot == "Paper") {
        if (input == "Scissors"){
            document.getElementById("winLose").innerHTML = "You Win! Scissors beats Rock."
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Paper beats Rock."
        }
    } else {
        if (input == "Rock"){
            document.getElementById("winLose").innerHTML = "You Win! Rock beats Scissors."
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Scissors beats Paper."
        }
    }

};

buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
        playRound(button.textContent);
    });
});