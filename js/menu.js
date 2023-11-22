// This is the script for the slide out menus (hamburger and settings)

const navigationMenu = document.querySelector('#navigation-menu');
const hamburgerButton = document.querySelector('#hamburger-button');
const settingsButton = document.querySelector('#settings-button');

hamburgerButton.addEventListener('click', () =>{
    hamburgerButton.classList.toggle('active');
    navigationMenu.classList.toggle('active')
})

settingsButton.onclick = () => {
    settingsButton.classList.toggle('active');
}