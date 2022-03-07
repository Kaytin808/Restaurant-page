const content = document.getElementById('content');
var header = document.createElement('div');
var containerTitle = document.createElement('div');
var navContainer = document.createElement('ul');
var navBar1 = document.createElement('li');
var navBar2 = document.createElement('li');
var navBar3 = document.createElement('li');
containerTitle.innerHTML = 'Onolicious Grindz';
navBar1.classList.add('navbar1')
navBar1.innerHTML = 'Home'
navBar2.classList.add('navbar2')
navBar2.innerHTML = 'Menu'
navBar3.classList.add('navbar3')
navBar3.innerHTML = 'Contact'
navContainer.classList.add('navbar-container')
containerTitle.classList.add('container-title')
containerTitle.innerHTML = 'Onolicious Grindz';
header.classList.add('header')
content.appendChild(header)
content.appendChild(navContainer)
navContainer.appendChild(navBar1)
navContainer.appendChild(navBar2)
navContainer.appendChild(navBar3)
header.appendChild(containerTitle)