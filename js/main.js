const startGameButton = document.querySelector('#start-game-button');
const tutorialPopup = document.querySelector('#tutorial-popup');
const gameContainer = document.querySelector('#game-container');
const continueButton = document.querySelector('#continue-button');

startGameButton.onclick = () => {
    tutorialPopup.classList.add('active');
    gameContainer.classList.add('active');
}

continueButton.onclick = () => {
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
}