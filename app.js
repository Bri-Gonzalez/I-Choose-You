const URL = "https://pokeapi.co/api/v2/pokemon/"
const starterContainer = document.querySelector(".starter-container");
// const starterImg = document.createElement("div");
// starterImg.classList.add(".pokemon-img")
// starterContainer.append(starterImg)
// const starterName = document.createElement("div");
// starterName.classList.add(".pokemon-name")
// starterContainer.append(starterName)

// const starterName = document.querySelector(".pokemon-name");




//CREATE 
// function appendImg(url) {
//   let starterImg = document.createElement("div");
//   starterImg.src = url;
//   starterImg.classList.add(".pokemon-img");
//   starterContainer.append(starterImg);
// };

// function appendName(text) {
//   let starterName = document.createElement("div");
//   starterName.innerHTML = text;
//   starterName.classList.add(".pokemon-name");
//   starterContainer.append(starterName);
// }

//GRASS
const grassBtn = document.querySelector("#grassBtn");
grassBtn.addEventListener("click", () => {
  removePokemon()
  grassPokemon()
});

async function grassPokemon() {

  let grassType = [810, 495, 650, 722, 387, 152, 252, 1];
  let randomGrass = Math.floor(Math.random() * grassType.length);
  let randomPokemonID = grassType[randomGrass];

  const starterImg = document.createElement("div");
  starterImg.classList.add(".pokemon-img")
  starterContainer.append(starterImg)
  const starterName = document.createElement("div");
  starterName.classList.add(".pokemon-name")
  starterContainer.append(starterName)

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    let grassImg = document.createElement("img");
    grassImg.src = res.data.sprites.front_default;
    starterImg.append(grassImg);
    starterContainer.append(starterImg);

    let grassName = document.createElement("h3");
    grassName.innerText = res.data.name;
    starterName.append(grassName);
    starterContainer.append(starterName);

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

  let fireType = [813, 498, 653, 725, 390, 155, 255, 4];
  let randomFire = Math.floor(Math.random() * fireType.length);
  let randomPokemonID = fireType[randomFire];

  const starterImg = document.createElement("div");
  starterImg.classList.add(".pokemon-img")
  starterContainer.append(starterImg)
  const starterName = document.createElement("div");
  starterName.classList.add(".pokemon-name")
  starterContainer.append(starterName)

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    let fireImg = document.createElement("img");
    fireImg.src = res.data.sprites.front_default;
    starterImg.append(fireImg);
    starterContainer.append(starterImg);

    let fireName = document.createElement("h3");
    fireName.innerText = res.data.name;
    starterName.append(fireName);
    starterContainer.append(starterName);

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

  let waterType = [816, 501, 656, 728, 393, 158, 258, 7];
  let randomWater = Math.floor(Math.random() * waterType.length);
  let randomPokemonID = waterType[randomWater];

  const starterImg = document.createElement("div");
  starterImg.classList.add(".pokemon-img")
  starterContainer.append(starterImg)
  const starterName = document.createElement("div");
  starterName.classList.add(".pokemon-name")
  starterContainer.append(starterName)

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    let waterImg = document.createElement("img");
    waterImg.src = res.data.sprites.front_default;
    starterImg.append(waterImg);
    starterContainer.append(starterImg);

    let waterName = document.createElement("h3");
    waterName.innerText = res.data.name;
    starterName.append(waterName);
    starterContainer.append(starterName);

  } catch (error) {
    console.log(error);
  }
}

//REMOVE
// function removePokemon() {
//   while (starterContainer.lastChild) {
//     starterContainer.removeChild(starterContainer.lastChild)
//   }
// }

function removePokemon() {
  starterContainer.innerHTML = "";
}