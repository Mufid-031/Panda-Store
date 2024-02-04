// import app.js

// Navbar
const slideButton = document.querySelector(".garis-tiga input");
const nav = document.querySelector("nav ul");
const main = document.querySelector(".main");
slideButton.addEventListener("click", function () {
  nav.classList.toggle("slide");
  main.classList.toggle("aktif");
});

// search button
const searchButton = document.getElementById("search-button");
const searchInput = document.querySelector(".search-input input");
searchButton.addEventListener("click", function () {
  searchButton.classList.toggle("aktif");
  searchInput.classList.toggle("aktif");
  if (searchInput.value !== "") {
    searchInput.value = "";
  }
});

// shopping cart
const shoppingCart = document.getElementById("button-shoppingcart");
shoppingCart.addEventListener("click", function () {
  const shoppingNav = document.querySelector(".shopping-cart");
  shoppingCart.classList.toggle("aktif");
  shoppingNav.classList.toggle("shopping-slide");
});

// Animation shoes
const slideRed = document.querySelector(".black-button");
const red = document.querySelector(".red");
const black = document.querySelector(".black");
const changeColor = document.querySelector(".black-button");
slideRed.addEventListener("click", function () {
  red.classList.toggle("slide-red");
  black.classList.toggle("slide-black");
  changeColor.classList.toggle("red-button");
});




// Check out button disabled

// sweetAlert for button buy Transfer

// sweesAlert for button buy

// Notofication for button-shopping cart in card

// Notofication for button-shopping cart in card
