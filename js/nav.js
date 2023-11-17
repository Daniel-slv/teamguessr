const navigationMenu = document.querySelector('#navigation-menu');
const hamburgerButton = document.querySelector('#hamburger-button');

hamburgerButton.addEventListener('click', () =>{
    hamburgerButton.classList.toggle('is-active');
    navigationMenu.classList.toggle('is-active')
})