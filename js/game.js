import {teamList} from './teamlist.js';
import {startGameButton, tutorialPopup, gameContainer, continueButton, answerInput, titleList, inputsContainer, checkButton, textInput, insideGameContainer} from './elements.js';

startGameButton.onclick = () => {
    tutorialPopup.classList.add('active');
    gameContainer.classList.add('active');
}

continueButton.onclick = () => {
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
    titleList.classList.add('ongoing-game');
    startGameButton.classList.add('ongoing-game');
    answerInput.classList.add('ongoing-game');
    inputsContainer.classList.add('ongoing-game')
}

answerInput.addEventListener("keydown", clearSpan);

let teamName = "";

function startGame(){
    const team = defineTeamToBeGuessed();
    teamName = team.name.toLowerCase();
    showTitles(team);
}

startGame();

function defineTeamToBeGuessed(){
    const teams = Object.keys(teamList);
    const len = teams.length;
    const rnd = Math.floor(Math.random() * len);
    const team = teamList[teams[rnd]];
    return team;
}

checkButton.addEventListener("click", checkAnswer);
checkButton.onclick = () => {
    window.scrollTo(0, 0);
}

function checkAnswer(){
    let playerGuess = textInput.value.toLowerCase();
    if((playerGuess == teamName)){
        titleList.classList.remove('ongoing-game');
        document.getElementById('result').innerHTML= 'correct!';
        insideGameContainer.innerHTML = `<button id="play-again-button" class="button">Play Again</button>`
        const playAgainButton = document.querySelector("#play-again-button");
        playAgainButton.addEventListener("click", ()=>{
        location.reload();
        });
    }
    else{
    document.getElementById('result').innerHTML= 'wrong, keep trying!';
    }
}

function clearSpan(){
    document.getElementById('result').innerHTML= '';
}

function showTitles(team){
    let teamToBeGuessedTitles = `<li>${team.nationalLeagueTitles} National League Titles</li>
    <li>${team.nationalCupTitles} National Cup Titles</li>
    <li>${team.uelOrSudamericanaTitles} UEL / Sudamericana Titles</li>
    <li>${team.uclOrLibertadoresTitles} UCL / Libertadores Titles</li>
    <li>${team.clubWorldCupTitles} Club World Cup Titles</li>`;
    titleList.innerHTML = teamToBeGuessedTitles;
}