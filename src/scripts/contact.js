var contact = document.querySelector(".navbar3");
var main = document.querySelector(".main-container");
var contactContainer = document.createElement("div");
var phoneP = document.createElement("p");
var detailP = document.createElement("p");
var detailContainer = document.createElement("div");
import addy from '../Images/address.png'
const adGps = new Image()
detailContainer.classList.add("detail-container");
phoneP.innerHTML = "Customer Service : (808)-412-4583";
detailP.innerHTML =
  "We are located in the HEART of waikiki! <br>Come on by and bring your family and friends!";
contactContainer.classList.add("contactContainer");
adGps.classList.add("gps");
adGps.src = addy;

main.appendChild(contactContainer);
contactContainer.appendChild(adGps);
contactContainer.appendChild(detailContainer);
detailContainer.appendChild(phoneP);
detailContainer.appendChild(detailP);
