// IMPORTING THE TEAMS AND THE BUTTONS VARIABLES

import {teamList} from './teamlist.js';
import {startGameButton, tutorialPopup, gameContainer, continueButton, scoreText, answerInput, titleList, inputsContainer} from './buttons.js';

// BUTTONS BEHAVIOR

continueButton.onclick = () => {
    titleList.classList.add('ongoing-game');
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
    startGameButton.classList.add('ongoing-game');
    answerInput.classList.add('ongoing-game');
    titleList.classList.add('ongoing-game');
    inputsContainer.classList.add('ongoing-game')
}

startGameButton.onclick = () => {
    tutorialPopup.classList.add('active');
    gameContainer.classList.add('active');
}

function defineTeamToBeGuessed(){
    const teams = Object.keys(teamList);
    const len = teams.length;
    const rnd = Math.floor(Math.random() * len);
    const team = teamList[teams[rnd]];
    return team;
}

const team = defineTeamToBeGuessed();
const teamName = team.name.toLowerCase();
showTitles(team);

const checkButton = document.querySelector("#check-button");

//defineTeamToBeGuessed();

function checkAnswer(){
    const textInput = document.getElementById("answer-input");
    if((textInput.value == team.name.toLowerCase())){
    document.getElementById('result').innerHTML= 'correct!';
    }
    else{
    document.getElementById('result').innerHTML= 'wrong, keep trying!';
    }
}

function clearSpan(){
    document.getElementById('result').innerHTML= '';
}

function showTitles(team){;
    let teamToBeGuessedTitles = `<li>${team.nationalLeagueTitles} National League Titles</li>
    <li>${team.nationalCupTitles} National Cup Titles</li>
    <li>${team.uclOrLibertadoresTitles} UCL / Libertadores Titles</li>
    <li>${team.clubWorldCupTitles} Club World Cup Titles</li>`;

    titleList.innerHTML = teamToBeGuessedTitles;
}
checkButton.addEventListener("click", checkAnswer);
answerInput.addEventListener("keydown", clearSpan);

console.log(teamName);




