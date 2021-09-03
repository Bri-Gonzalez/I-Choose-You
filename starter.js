const URL = "https://pokeapi.co/api/v2/pokemon/"
const starterContainer = document.querySelector(".starter-container");


//CREATE 
function appendImg(url) {
  let Img = document.createElement("img");
  let starterImg = document.createElement("div");
  Img.src = url;
  starterImg.classList.add(".pokemon-img");
  starterContainer.append(starterImg);
  starterImg.append(Img);
};

function appendName(text) {
  let h3 = document.createElement("h3");
  let starterName = document.createElement("div");
  h3.innerHTML = text;
  starterName.appendChild(h3)
  starterName.classList.add(".pokemon-name");
  starterContainer.append(starterName);
}

//GRASS
const grassBtn = document.querySelector("#grassBtn");
grassBtn.addEventListener("click", () => {
  removePokemon()
  grassPokemon()
});

async function grassPokemon() {

  let grassType = [810, 495, 650, 722, 25, 387, 152, 252, 1, 810, 495, 650, 722, 387, 152, 252, 1];
  let randomGrass = Math.floor(Math.random() * grassType.length);
  let randomPokemonID = grassType[randomGrass];

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    appendImg(res.data.sprites.front_default);
    appendName(res.data.name);

  } catch (error) {
    console.log(error);
  }
}

//FIRE
const fireBtn = document.querySelector("#fireBtn");
fireBtn.addEventListener("click", () => {
  removePokemon()
  firePokemon()
});

async function firePokemon() {

  let fireType = [813, 498, 653, 25, 725, 390, 155, 255, 4, 813, 498, 653, 725, 390, 155, 255, 4];
  let randomFire = Math.floor(Math.random() * fireType.length);
  let randomPokemonID = fireType[randomFire];

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    appendImg(res.data.sprites.front_default);
    appendName(res.data.name);

  } catch (error) {
    console.log(error);
  }
}

//WATER
const waterBtn = document.querySelector("#waterBtn");
waterBtn.addEventListener("click", () => {
  removePokemon()
  waterPokemon()
});

async function waterPokemon() {

  let waterType = [816, 501, 656, 728, 393, 25, 158, 258, 7, 816, 501, 656, 728, 393, 158, 258, 7];
  let randomWater = Math.floor(Math.random() * waterType.length);
  let randomPokemonID = waterType[randomWater];

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    appendImg(res.data.sprites.front_default);
    appendName(res.data.name);

  } catch (error) {
    console.log(error);
  }
}

//REMOVE
function removePokemon() {
  starterContainer.innerHTML = "";
}