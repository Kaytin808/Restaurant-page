var contact = document.querySelector(".navbar3");
var gps = document.createElement("img");
var main = document.querySelector(".main-container");
var contactContainer = document.createElement("div");
var phoneP = document.createElement("p");
var detailP = document.createElement("p");
var detailContainer = document.createElement("div");
detailContainer.classList.add("detail-container");
phoneP.innerHTML = "Customer Service : (808)-412-4583";
detailP.innerHTML =
  "We are located in the HEART of waikiki! <br>Come on by and bring your family and friends!";
contactContainer.classList.add("contactContainer");
gps.classList.add("gps");
gps.src = "../src/Images/address.png";

main.appendChild(contactContainer);
contactContainer.appendChild(gps);
contactContainer.appendChild(detailContainer);
detailContainer.appendChild(phoneP);
detailContainer.appendChild(detailP);
