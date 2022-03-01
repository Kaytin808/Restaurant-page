export default function menu() {
    var menuTab = document.querySelector('.navbar2');
    var main = document.querySelector('.main-container')
    var title = document.createElement('div')
    title.classList.add('title')
    var titleH4 = document.createElement('h4')
    var menuSpan = document.createTextNode(' menu')
    var titleSpan = document.createElement('span')
    titleSpan.innerHTML = 'Onolicious food from hawaii'
    var menu = document.createElement('div')
    menu.classList.add('menu')
    var singleMenu = document.createElement('div')
    singleMenu.classList.add('single-menu')
    var menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')
    var garlicShrimp = document.createElement('h4')
    garlicShrimp.innerHTML = 'Garlic shrimp'
    var garlicSpan = document.createElement('span')
    garlicSpan.innerHTML = '$7.99'
    var garlicP = document.createElement('p')
    garlicP.innerHTML = 'The BEST Garlic Shrimp ever! It’s just like the famous <br>shrimp you buy at the food trucks in Hawaii. '
    // Images //
    var img1 = document.createElement('img')
    var img2 = document.createElement('img')
    var img3 = document.createElement('img')
    var img4 = document.createElement('img')
    var img5 = document.createElement('img')
    var img6 = document.createElement('img')
// image class //
    img1.classList.add('food')
    img2.classList.add('food')
    img3.classList.add('food')
    img4.classList.add('food')
    img5.classList.add('food')
    img6.classList.add('food')
    // upon menu click  //
    menuTab.addEventListener('click',() => {
        
        img1.src = '/src/Images/garlic shrimp.jpg'
        img2.src = '/src/Images/kalua.jpg'
        img3.src ='/src/Images/mahi.jpg'
        img4.src ='/src/Images/musubi.jpg'
        img5.src = '/src/Images/katsu.jpg'
        img6.src ='/src/Images/locomoco.jpg'
        main.innerHTML = '';


        main.appendChild(title)
        title.appendChild(titleH4)
        titleH4.appendChild(titleSpan)
        main.appendChild(menu)
        menu.appendChild(singleMenu)
        singleMenu.appendChild(img1)
        singleMenu.appendChild(menuContent)
        menuContent.appendChild(garlicShrimp)
        garlicShrimp.appendChild(garlicSpan)
        menuContent.appendChild(garlicP)
    })
}