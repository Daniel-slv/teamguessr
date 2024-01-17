import {teamList} from './teamlist.js';
import {
    gameContainer,
    insideGameContainer,
    startGameButton,
    tutorialPopup,
    continueButton,
    titleList,
    inputsContainer,
    answerInput,
    checkButton
} from './elements.js';

const showTutorial = () => {
    tutorialPopup.classList.add('active');
    gameContainer.classList.add('active');
};

startGameButton.addEventListener('click', showTutorial);

continueButton.addEventListener('click', () => {
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
    titleList.classList.add('ongoing-game');
    startGameButton.classList.add('ongoing-game');
    inputsContainer.classList.add('ongoing-game');
});

const defineTeamToBeGuessedTeam = () => {
    const teams = Object.values(teamList);
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
};

const team = defineTeamToBeGuessedTeam();
const teamName = team.name.toLowerCase();

const showTitles = () => {
    const teamToBeGuessedTitles =
        `<li>${team.nationalLeagueTitles} National League Titles</li>
        <li>${team.nationalCupTitles} National Cup Titles</li>
        <li>${team.uelOrSudamericanaTitles} UEL / Sudamericana Titles</li>
        <li>${team.uclOrLibertadoresTitles} UCL / Libertadores Titles</li>
        <li>${team.clubWorldCupTitles} Club World Cup Titles</li>`;
    titleList.innerHTML = teamToBeGuessedTitles;
};

showTitles();

const clearResult = () => {
    document.getElementById('result').innerHTML = '';
};

const checkAnswer = () => {
    const playerGuess = answerInput.value.toLowerCase();
    const result = document.getElementById('result');

    if (playerGuess === teamName) {
        titleList.classList.remove('ongoing-game');
        inputsContainer.classList.remove('ongoing-game');
        result.innerHTML = 'correct!';
        insideGameContainer.innerHTML =
        `<button id="play-again-button" class="button">Play Again</button>`;
    } else {
        result.innerHTML = 'wrong, keep trying!';
    }
};

const playAgain = () => {
    location.reload();
};

insideGameContainer.addEventListener('click', (event) => {
    if (event.target.id === 'play-again-button') {
        playAgain();
    }
});

checkButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
    checkAnswer();
});

answerInput.addEventListener('keydown', clearResult);