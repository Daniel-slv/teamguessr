/* Selecting some HTML elements */

export const startGameButton = document.querySelector('#start-game-button');
const tutorialPopup = document.querySelector('#tutorial-popup');
const gameContainer = document.querySelector('#game-container');
const continueButton = document.querySelector('#continue-button');
const scoreText = document.querySelector('#score-container');
const answerInput = document.querySelector('#answer-input');
const titleList = document.querySelector('#title-list');

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
    titleList.classList.add('ongoing-game')
}


