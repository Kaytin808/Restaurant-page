var menuTab = document.querySelector(".navbar2");
var main = document.querySelector(".main-container");
var menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");
var homeTab = document.querySelector(".navbar1");

import kaluaFood from "../Images/kalua.jpg";
import musubiFood from "../Images/musubi.jpg";
import katsuFood from "../Images/katsu.jpg";
import mahiFood from "../Images/mahi.jpg";
import shrimpFood from "../Images/garlic shrimp.jpg";
import locoFood from "../Images/locomoco.jpg";

const newFood = new Image();
// Food Names //
var garlicShrimp = document.createElement("h4");
var kalua = document.createElement("h4");
var mahi = document.createElement("h4");
var musubi = document.createElement("h4");
var katsu = document.createElement("h4");
var locomoco = document.createElement("h4");

// Food Prices //
var kaluaSpan = document.createElement("span");
var garlicSpan = document.createElement("span");
var mahiSpan = document.createElement("span");
var musubiSpan = document.createElement("span");
var katsuSpan = document.createElement("span");
var locoSpan = document.createElement("span");

// singe items container //
var itemShrimp = document.createElement("div");
var itemKalua = document.createElement("div");
var itemMahi = document.createElement("div");
var itemMusubi = document.createElement("div");
var itemKatsu = document.createElement("div");
var itemLoco = document.createElement("div");

// menu content container //
var menuContentShrimp = document.createElement("div");
var menuContentKalua = document.createElement("div");
var menuContentMahi = document.createElement("div");
var menuContentMusubi = document.createElement("div");
var menuContentKatsu = document.createElement("div");
var menuContentLoco = document.createElement("div");

// details about food here 'p' //
var detailShrimp = document.createElement("p");
var detailKalua = document.createElement("p");
var detailMahi = document.createElement("p");
var detailMusubi = document.createElement("p");
var detailKatsu = document.createElement("p");
var detailLoco = document.createElement("p");

// Class Names //
menuContentShrimp.classList.add("menu-content");
menuContentKalua.classList.add("menu-content");
menuContentMahi.classList.add("menu-content");
menuContentMusubi.classList.add("menu-content");
menuContentKatsu.classList.add("menu-content");
menuContentLoco.classList.add("menu-content");
itemLoco.classList.add("single-item");
itemKatsu.classList.add("single-item");
itemMusubi.classList.add("single-item");
itemShrimp.classList.add("single-item");
itemKalua.classList.add("single-item");
itemMahi.classList.add("single-item");

// Images //
// var img1 = document.createElement("img");
// var img2 = document.createElement("img");
// var img3 = document.createElement("img");
// var img4 = document.createElement("img");
// var img5 = document.createElement("img");
// var img6 = document.createElement("img");

// image class //
// img1.classList.add("food");
// img2.classList.add("food");
// img3.classList.add("food");
// img4.classList.add("food");
// img5.classList.add("food");
// img6.classList.add("food");

// upon menu click  //
const newKatsu = new Image();
const newMusubi = new Image();
const newShrimp = new Image();
const newKalua = new Image();
const newMahi = new Image();
const newLoco = new Image();
newKatsu.classList.add("food");
newLoco.classList.add("food");
newKalua.classList.add("food");
newMahi.classList.add("food");
newShrimp.classList.add("food");
newMusubi.classList.add("food");
newKatsu.src = katsuFood;
newMusubi.src = musubiFood;
newShrimp.src = shrimpFood;
newKalua.src = kaluaFood;
newMahi.src = mahiFood;
newLoco.src = locoFood;

// Text Content //

// Loco Moco //
locoSpan.textContent = "$10.99";
locomoco.textContent = "Loco Moco w/ Mushroom Gravy";
detailLoco.textContent =
  "Another local favorite! Hamburger patty poured with mushroom gravy on top! Choice of how you like your eggs as well!";
// Katsu //
katsuSpan.textContent = "$5.99";
katsu.textContent = "Chicken Katsu With Rice";
detailKatsu.textContent =
  "Japanese style fried chicken. Pork cutlets with choice of brown or white rice";
// Musubi //
musubiSpan.textContent = "$3.99";
musubi.textContent = "Musubi";
detailMusubi.textContent =
  "Local favorite! Spam topped with rice and shoyu sauce wrapped in nori!";
// Kalua //
kalua.textContent = "Kalua Pork & Cabbage";
kaluaSpan.textContent = "$6.99";
detailKalua.textContent =
  "Simple recipe by old folks in town. Smoked pork mixed in with some pork and choice of white or brown rice";
// Garlic Shrimp //
garlicShrimp.textContent = "Garlic Shrimp";
garlicSpan.textContent = "$7.99";
detailShrimp.textContent =
  "Made with lemon, pineapples on the side, and garlic";
// Mahi Mahi //
mahi.textContent = "Grilled Mahi Mahi";
detailMahi.textContent =
  "Lean white fish that hails from warm waters of hawaii and Gulf Mexico";
mahiSpan.textContent = "$6.99";

main.appendChild(menuContainer);
// Single Item classes //
menuContainer.appendChild(itemShrimp);
menuContainer.appendChild(itemKalua);
menuContainer.appendChild(itemMahi);
menuContainer.appendChild(itemMusubi);
menuContainer.appendChild(itemKatsu);
menuContainer.appendChild(itemLoco);

// Food Images //
itemShrimp.appendChild(newShrimp);
itemKalua.appendChild(newKalua);
itemMahi.appendChild(newMahi);
itemMusubi.appendChild(newMusubi);
itemKatsu.appendChild(newKatsu);
itemLoco.appendChild(newLoco);

// Menu Content //
itemShrimp.appendChild(menuContentShrimp);
itemKalua.appendChild(menuContentKalua);
itemMahi.appendChild(menuContentMahi);
itemMusubi.appendChild(menuContentMusubi);
itemKatsu.appendChild(menuContentKatsu);
itemLoco.appendChild(menuContentLoco);
menuContentLoco.appendChild(locomoco);
menuContentLoco.appendChild(detailLoco);
menuContentKatsu.appendChild(katsu);
menuContentKatsu.appendChild(detailKatsu);
menuContentMusubi.appendChild(musubi);
menuContentMusubi.appendChild(detailMusubi);
menuContentMahi.appendChild(mahi);
menuContentMahi.appendChild(detailMahi);
menuContentKalua.appendChild(kalua);
menuContentKalua.appendChild(detailKalua);
menuContentShrimp.appendChild(garlicShrimp);
menuContentShrimp.appendChild(detailShrimp);

// Span Content //
katsu.appendChild(katsuSpan);
musubi.appendChild(musubiSpan);
mahi.appendChild(mahiSpan);
kalua.appendChild(kaluaSpan);
garlicShrimp.appendChild(garlicSpan);
locomoco.appendChild(locoSpan);
