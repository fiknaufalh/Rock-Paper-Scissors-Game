// =============== Player Score ===============
const userScore_span = document.getElementById("user-score");
const enemyScore_span = document.getElementById("enemy-score");

let userScore = 0;
let enemyScore = 0;

// =============== Restart & Result-Modal ===============
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");

let closeBtn;

// =============== Player's Choices ===============
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


// =============== Main Function ===============
function main() {
    this.toggleScreen('start-screen',false);
    this.toggleScreen('game-screen',true);

    rock_div.addEventListener('click', function() {
        play('rock');
    })
    
    paper_div.addEventListener('click', function() {
        play('paper');
    })
    
    scissors_div.addEventListener('click', function() {
        play('scissors');
    })
}


// =============== Toggle Screen Function ===============
function toggleScreen(id,toggle)
{
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none';
    element.style.display = display;
}


// =============== Play Function ===============
function play(userChoice) 
{
    const enemyChoice = getEnemyChoice();
    switch (userChoice + enemyChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
        win(userChoice, enemyChoice);
        break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
        lose(userChoice, enemyChoice);
        break;
        case 'rockrock':
            case 'paperpaper':
                case 'scissorsscissors':
                    draw(userChoice, enemyChoice);
                    break;
    }
}


// =============== Player's Choice Getter ===============
function getEnemyChoice() 
{
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


// =============== Game Result State ===============
function win(userChoice, enemyChoice) 
{
    userScore++;
    userScore_span.innerHTML = userScore;
    enemyScore_span.innerHTML = enemyScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-win">You win!</h1> <p>Enemy choose <strong>${enemyChoice}</strong></p>`;
    modal.style.display = 'block';
}

function lose(userChoice, enemyChoice)
{
    enemyScore++;
    userScore_span.innerHTML = userScore;
    enemyScore_span.innerHTML = enemyScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-lose">You lost</h1> <p>Enemy choose <strong>${enemyChoice}</strong></p>`; 
    modal.style.display = 'block'
}

function draw(userChoice, enemyChoice)
{
    userScore_span.innerHTML = userScore;
    enemyScore_span.innerHTML = enemyScore;
    result.innerHTML = `<span class="close"></span> <h1>It's a draw</h1> <p>You both choose <strong>${enemyChoice}</strong></p>`;
    modal.style.display = 'block'
}


// =============== Clear Result Modal ===============
function clearModal(e)
{
    closeBtn = document.querySelector('.close');

    if(e.target == modal) {
        modal.style.display = "none"
    }
    else if(closeBtn){
        closeBtn.addEventListener('click', function(){
        modal.style.display = "none"
        });
    }
}

window.addEventListener('click', clearModal);


// =============== Restart Game Feature ===============
function restartGame()
{
    userScore = 0;
    enemyScore = 0;
    userScore_span.innerHTML = userScore;
    enemyScore_span.innerHTML = enemyScore;
}

restart.addEventListener('click', restartGame);
