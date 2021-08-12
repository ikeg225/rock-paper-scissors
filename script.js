let human = 0;
let robot = 0;
let round = 0;

const buttons = document.querySelectorAll('button');

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
            robot++;
        }
    } else if (robot == "Paper") {
        if (input == "Scissors"){
            document.getElementById("winLose").innerHTML = "You Win! Scissors beats Rock.";
            human++;
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Paper beats Rock.";
            robot++;
        }
    } else {
        if (input == "Rock"){
            document.getElementById("winLose").innerHTML = "You Win! Rock beats Scissors.";
            human++;
        }
        else {
            document.getElementById("winLose").innerHTML = "You Lose! Scissors beats Paper.";
            robot++;
        }
    }

};

function update() {
    document.getElementById("round").innerHTML = "Round: " + round;
    document.getElementById("winRate").innerHTML = "Win Rate: " + human / round + "%";
    document.getElementById("human").innerHTML = "Human: " + human;
    document.getElementById("robot").innerHTML = "Robot: " + robot;
}


buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
        playRound(button.textContent);
        update();
    });
});