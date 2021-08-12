let human = 0;
let rbtScore = 0;
let round = 0;

const op = document.querySelector('#options');
const buttons = op.querySelectorAll('button');

function robotPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * options.length);
    return options[random]
};

function playRound(input) {
    robot = robotPlay();
    round++;

    if (robot == input) {
        document.getElementById("winLose").innerHTML = "It's a Tie!";
    } else if (robot == "Rock") {
        if (input == "Paper") {
            document.getElementById("winLose").innerHTML = "You Win! Paper beats Rock.";
            human++;
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Rock beats Scissors.";
            rbtScore++;
        }
    } else if (robot == "Paper") {
        if (input == "Scissors"){
            document.getElementById("winLose").innerHTML = "You Win! Scissors beats Rock.";
            human++;
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Paper beats Rock.";
            rbtScore++;
        }
    } else {
        if (input == "Rock"){
            document.getElementById("winLose").innerHTML = "You Win! Rock beats Scissors.";
            human++;
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Scissors beats Paper.";
            rbtScore++;
        }
    }

};

function update() {
    document.getElementById("round").innerHTML = "Round: " + round;
    document.getElementById("human").innerHTML = "Human: " + human;
    document.getElementById("robot").innerHTML = "Robot: " + rbtScore;

    if (human + rbtScore != 0) {
        document.getElementById("winRate").innerHTML = "Win Rate: " + Math.round((human / (human + rbtScore)) * 100) + "%";
    } else {
        document.getElementById("winRate").innerHTML = "Win Rate: 0%";
    }
}


buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
        playRound(button.textContent);
        update();
    });
});

document.querySelector('#reset').addEventListener(('click'), () => {
    human = rbtScore = round = 0;
    update();
    document.getElementById("winLose").innerHTML = "Click a Button Above!";
});