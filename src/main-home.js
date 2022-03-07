import './styles/header.css'
import './styles/universal.css'
import './styles/main.css'
import './styles/footer.css'
import header from './scripts/header'
import mainSection from './scripts/mainSection'
import contact from './scripts/contact'
import menu from './scripts/menu'

var homeContainer = document.querySelector('.home-container')
var menuContainer = document.querySelector('.menu-container')
var homeNav = document.querySelector('.navbar1')
var menuNav = document.querySelector('.navbar2')

// Tab loaders //
// contact();
// menu();

function homeTab() {
    homeContainer.classList = 'selected';
    menuContainer.classList = 'menu-container';
}
homeNav.addEventListener('click', () => {
    homeTab();
})

function menuTab() {
    menuContainer.classList = 'selected';
    homeContainer.classList = 'home-container'
}
menuNav.addEventListener('click', () => {
    menuTab()
})
// Import styles
 header;
 mainSection;
 
