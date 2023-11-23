
import {teamList} from './teamlist.js';

let teamToBeGuessed = "";
let rnd = 0;
let teams = 0;
defineTeamToBeGuessed();

function defineTeamToBeGuessed(){
    teams = Object.keys(teamList);
    const len = teams.length;
    rnd = Math.floor(Math.random() * len);
    let team = teamList[teams[rnd]];
    teamToBeGuessed = team.name;
}

function showTitles(rnd){;
    let teamToBeGuessedTitles = <ul id="title-list" class="hidden-at-start">
    <li>${teamList[teams[rnd]].nationalLeagueTitles} + " National League Titles"</li>
    <li>X National Cup Titles</li>
    <li>X UCL/Libertadores Titles</li>
    <li>X Club World Cup Titles</li>
</ul>
}