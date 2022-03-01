import time from '/home/kaytin/Documents/the-odin-project/Restaurant-page/src/Images/time.png'
const myTime = new Image();
const content = document.getElementById('content');
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
hoursContainer.classList.add('hours-container')
mainContainer.classList.add('main-container')
hoursUl.classList.add('hours-ul')
hoursM_f.classList.add('hours')
hoursSs.classList.add('hours')

hoursM_f.innerHTML = 'Mon-Fri:7am-7pm';
hoursSs.innerHTML = 'Sat-Sun:CLOSED'
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