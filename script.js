let botScore = 0;
let fifiScore = 0;
let draw = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = choices[Math.floor(Math.random() * 3)];

   document.getElementById('user-choice').textContent = `Fifi: ${emoji(userChoice)}`;
   document.getElementById('bot-choice').textContent = `Bot: ${emoji(botChoice)}`;

   const result = getresult(userchoice, botchoice);
   document.getElementById('outcome').textContent = result;

   if (result === "Fifi Wins!") {
    fifiScore;
   } else if(result === "Fifi lost!") {
    botScore;
   } else {
    draw;
   }
}

function getresult(user, bot) {
    if (user === bot) 
        return "It is a draw!";
    if (
        (user === 'rock' && bot === 'scissors') ||
        (user === 'scissors' && bot === 'paper') ||
        (user === 'paper' && bot === 'rock') 
    ) {
        return "Fifi Wins!";
    }
        return "Fifi lost!";
}

function emoji(choice) {
    if (choice === 'rock') return '🪨';
    if (choice === 'paper') return '📃';
    if (choice === 'scissors') return '✂️';
}

function updateScores() {
    document.getElementById('ScoreFifi').textContent = fifiScore;
    document.getElementById('ScoreBot').textContent = botScore;
    document.getElementById('ScoreDraw').textContent = drawScore;
 }

 function updateGameStatus(result) {
    let status = document.getElementById('game-status');

    if (result == "Fifi Wins!") {
        status.innerText = "You won this round!";
    }
    if (result == "Fifi lost!") {
        status.innerText = "Bot won this round!";
    }
    if (result == "It's a draw!") {
        status.innerText = "It's a draw!";
    }
}

function resetGame() {
    fifiScore = 0;
    botScore = 0;
    drawScore = 0;
    updateScores();
    document.getElementById('user-choice').textContent = 'Fifi';
    document.getElementById('bot-choice').textContent = 'Bot';
    document.getElementById('outcome').textContent = '';
    document.getElementById('game-status').textContent = "Fifi's turn";
}

