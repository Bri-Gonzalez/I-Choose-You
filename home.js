const iChooseYouBtn = document.querySelector("#i-choose-you");
const iChooseYouURL = "./starter.html";
iChooseYouBtn.addEventListener("click", () => {
  window.open(iChooseYouURL, "_self");
});

const pokeresearchBtn = document.querySelector("#pokeresearch");
const pokeresearchURL = "./dex.html";
pokeresearchBtn.addEventListener("click", () => {
  window.open(pokeresearchURL, "_self");
});