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
var contactContainer = document.querySelector('.contactContainer')
var homeNav = document.querySelector('.navbar1')
var menuNav = document.querySelector('.navbar2')
var contactNav = document.querySelector('.navbar3')

// Tab loaders //
// contact();
// menu();

function homeTab() {
    homeContainer.classList = 'selected';
    menuContainer.classList = 'menu-container';
    contactContainer.classList = 'hide'
}
homeNav.addEventListener('click', () => {
    homeTab();
})

function menuTab() {
    menuContainer.classList = 'selected';
    homeContainer.classList = 'hide'
    contactContainer.classList = 'hide'
}
menuNav.addEventListener('click', () => {
    menuTab()
})

function contactTab() {
    contactContainer.classList = 'selected';
    homeContainer.classList = 'hide'
    menuContainer.classList = 'hide'
}
contactNav.addEventListener('click' , () => {
    contactTab();
})
// Import styles
 header;
 mainSection;