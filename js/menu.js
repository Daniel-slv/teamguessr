/* SCRIPT FOR THE SLIDE OUT MENUS (HAMBURGER AND SETTINGS) */

import {
    navigationMenu, 
    hamburgerButton, 
    settingsButton
} from './elements.js';

hamburgerButton.addEventListener('click', () =>{
    hamburgerButton.classList.toggle('active');
    navigationMenu.classList.toggle('active');
});

settingsButton.addEventListener('click', () => {
    settingsButton.classList.toggle('active');
});