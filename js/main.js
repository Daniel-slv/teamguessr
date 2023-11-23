import {teamList} from './teamlist.js';

/* Selecting some HTML elements */

const startGameButton = document.querySelector('#start-game-button');
const tutorialPopup = document.querySelector('#tutorial-popup');
const gameContainer = document.querySelector('#game-container');
const continueButton = document.querySelector('#continue-button');
const scoreText = document.querySelector('#score-container');
const answerInput = document.querySelector('#answer-input');

/* Buttons behavior */

startGameButton.onclick = () => {
    tutorialPopup.classList.add('active');
    gameContainer.classList.add('active');
}

continueButton.onclick = () => {
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
    startGameButton.classList.add('ongoing-game');
    scoreText.classList.add('ongoing-game');
    answerInput.classList.add('ongoing-game');
}

let score = 0;
let questionCount = 0;
let teamToBeGuessed = "";
let rnd = 0;
defineTeamToBeGuessed();



function defineTeamToBeGuessed(){
    const teams = Object.keys(teamList);
    const len = teams.length;
    rnd = Math.floor(Math.random() * len);
    const team = teamList[teams[rnd]];
    teamToBeGuessed = team.name;
}

