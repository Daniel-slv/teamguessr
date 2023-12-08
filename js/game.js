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

startGameButton.addEventListener('click', () => {
    tutorialPopup.classList.add('active');
    gameContainer.classList.add('active');
});

continueButton.addEventListener('click', () => {
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
    titleList.classList.add('ongoing-game');
    startGameButton.classList.add('ongoing-game');
    answerInput.classList.add('ongoing-game');
    inputsContainer.classList.add('ongoing-game');
});

const defineTeamToBeGuessed = () => {
    const teams = Object.keys(teamList);
    const len = teams.length;
    const rnd = Math.floor(Math.random() * len);
    const team = teamList[teams[rnd]];
    return team;
};

const startGame = () => {
    const team = defineTeamToBeGuessed();
    const teamName = team.name.toLowerCase();
    showTitles(team);
    return teamName;
};

const clearSpan = () => {
    document.getElementById('result').innerHTML = '';
};

const showTitles = (team) => {
    const teamToBeGuessedTitles = `<li>${team.nationalLeagueTitles} National League Titles</li>
    <li>${team.nationalCupTitles} National Cup Titles</li>
    <li>${team.uelOrSudamericanaTitles} UEL / Sudamericana Titles</li>
    <li>${team.uclOrLibertadoresTitles} UCL / Libertadores Titles</li>
    <li>${team.clubWorldCupTitles} Club World Cup Titles</li>`;
    titleList.innerHTML = teamToBeGuessedTitles;
};

const teamName = startGame();

const checkAnswer = () => {
    const playerGuess = answerInput.value.toLowerCase();
    const result = document.getElementById('result');
    if (playerGuess === teamName) {
        titleList.classList.remove('ongoing-game');
        result.innerHTML = 'correct!';
        insideGameContainer.innerHTML = `<button id="play-again-button" class="button">Play Again</button>`;
        const playAgainButton = document.querySelector('#play-again-button');
        playAgainButton.addEventListener('click', () => {
        location.reload();
        });
    } else {
        result.innerHTML = 'wrong, keep trying!';
    }
};

checkButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
    checkAnswer();
});

answerInput.addEventListener('keydown', clearSpan);