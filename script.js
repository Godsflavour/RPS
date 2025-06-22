let botScore = 0;
let fifiScore = 0;
let draw = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const botChoice = [Math.floor(Math.random() * 3)];

   document.getElementById('user-choice').textContent = `Fifi: ${emoji(userChoice)}`;
   document.getElementById('bot-choice').textContent = `Bot: ${emoji(userChoice)}`;

   const result = getresult('userchoice', 'botchoice');
   document.getElementById('outcome').textContent = result;

   if (result === "Fifi Wins!") {
    fifiScore;
    document.getElementById('ScoreFifi').textContent = fifiScore;
   } else if(result === "Fifi lost!") {
    botScore;
   } else {
    document.getElementById('ScoreDraw').textContent = drawScore;
    drawScore;
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