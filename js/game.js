import {teamList} from './teamlist.js';

let teamToBeGuessed = "";
let rnd = 0;
let teams = 0;
const titleList = document.querySelector('#title-list');
const continueButton = document.querySelector('#continue-button');
defineTeamToBeGuessed();
showTitles(rnd);

function defineTeamToBeGuessed(){
    teams = Object.keys(teamList);
    const len = teams.length;
    rnd = Math.floor(Math.random() * len);
    let team = teamList[teams[rnd]];
    teamToBeGuessed = team.name;
    return rnd;
}

function showTitles(rnd){;
    let teamToBeGuessedTitles = `<li>${teamList[teams[rnd]].nationalLeagueTitles} National League Titles</li>
    <li>X National Cup Titles</li>
    <li>X UCL / Libertadores Titles</li>
    <li>X Club World Cup Titles</li>`;

    titleList.innerHTML = teamToBeGuessedTitles;
}

console.log(teamToBeGuessed);
