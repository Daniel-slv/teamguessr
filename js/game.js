// IMPORTING THE TEAMS AND THE BUTTONS VARIABLES

import {teamList} from './teamlist.js';
import {startGameButton, tutorialPopup, gameContainer, continueButton, scoreText, answerInput, titleList} from './buttons.js';

// BUTTONS BEHAVIOR

continueButton.onclick = () => {
    titleList.classList.add('ongoing-game');
    tutorialPopup.classList.remove('active');
    gameContainer.classList.remove('active');
    startGameButton.classList.add('ongoing-game');
    scoreText.classList.add('ongoing-game');
    answerInput.classList.add('ongoing-game');
    titleList.classList.add('ongoing-game')
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
    //const teamToBeGuessed = team.name;
    return team;
}

defineTeamToBeGuessed();
const team = defineTeamToBeGuessed();

function showTitles(rnd){;
    let teamToBeGuessedTitles = `<li>${teamList[teams[rnd]].nationalLeagueTitles} National League Titles</li>
    <li>${teamList[teams[rnd]].nationalCupTitles} National Cup Titles</li>
    <li>${teamList[teams[rnd]].uclOrLibertadoresTitles} UCL / Libertadores Titles</li>
    <li>${teamList[teams[rnd]].clubWorldCupTitles} Club World Cup Titles</li>`;

    titleList.innerHTML = teamToBeGuessedTitles;
}

console.log(team.nationalCupTitles);




