import './styles/header.css'
import './styles/universal.css'
import './styles/main.css'
import './styles/footer.css'
import time from './Images/time.png'


const myLogo = new Image();
const myTime = new Image();
const content = document.getElementById('content');
var header = document.createElement('div');
var containerTitle = document.createElement('div');
var navContainer = document.createElement('ul');
var navBar1 = document.createElement('li');
var navBar2 = document.createElement('li');
var navBar3 = document.createElement('li');
var mainContainer = document.createElement('div')
var hoursContainer = document.createElement('div')
var hoursUl = document.createElement('ul')
var hoursM_f = document.createElement('li')
var hoursSs = document.createElement('li')
var quote1 = document.createElement('div')
var quote2 = document.createElement('div')
var author1 = document.createElement('div');
var author2 = document.createElement('div')
quote1.innerHTML = '"Love coming in with my family! We always enjoy the fresh food that they make <br>for us! I recommend trying out the kalua pork and cabbage!"'
quote2.innerHTML = '"If you are looking for the best food on hawaii, this is it! I come by everytime after work<br> to \'let loose\' and eat the great food here!<br> The staff really treat you like family here! 10/10!! "'
quote1.style.fontFamily = 'sans';
author1.innerHTML = "—Faith M."
author2.innerHTML = "—Kekoa A."
author1.classList.add('author1')
author2.classList.add('author2')
quote1.classList.add('quote1')
quote2.classList.add('quote2')
myTime.src = time;
myTime.classList.add('time')
myTime.style.width = '50px';
header.classList.add('header')
content.appendChild(header)
containerTitle.classList.add('container-title')
containerTitle.innerHTML = 'Hawaiian Cuisine';
navBar1.classList.add('navbar')
navBar1.innerHTML = 'Home'
navBar2.classList.add('navbar')
navBar2.innerHTML = 'Menu'
navBar3.classList.add('navbar')
navBar3.innerHTML = 'Contact'
navContainer.classList.add('navbar-container')
hoursContainer.classList.add('hours-container')
mainContainer.classList.add('main-container')
hoursUl.classList.add('hours-ul')
hoursM_f.classList.add('hours')
hoursSs.classList.add('hours')

hoursM_f.innerHTML = 'Mon-Fri:7am-7pm';


hoursSs.innerHTML = 'Sat-Sun:CLOSED'






content.appendChild(header)
content.appendChild(navContainer)
content.appendChild(mainContainer)
mainContainer.appendChild(quote1)
mainContainer.appendChild(quote2)
mainContainer.appendChild(author1)
mainContainer.appendChild(author2)
mainContainer.appendChild(hoursContainer)
mainContainer.appendChild(myTime)
hoursContainer.appendChild(hoursUl)
hoursUl.appendChild(hoursM_f)

hoursUl.appendChild(hoursSs)
navContainer.appendChild(navBar1)
navContainer.appendChild(navBar2)
navContainer.appendChild(navBar3)
header.appendChild(containerTitle)
