const iChooseYouBtn = document.querySelector(".i-choose-you");
const iChooseYouURL = "./starter.html";
iChooseYouBtn.addEventListener("click", () => {
  window.open(iChooseYouURL, "_self");
});

const pokeresearchBtn = document.querySelector(".pokeresearch");
const pokeresearchURL = "./dex.html";
pokeresearchBtn.addEventListener("click", () => {
  window.open(pokeresearchURL, "_self");
});

const pokebinderBtn = document.querySelector(".pokebinder");
const pokebinderURL = "https://pokebinder.netlify.app/";
pokebinderBtn.addEventListener("click", () => {
  window.open(pokebinderURL, "_self");
});