const URL = "https://pokeapi.co/api/v2/pokemon/"
const starterImg = document.querySelector(".pokemon-img");
const starterName = document.querySelector(".pokemon-name");
const starterContainer = document.querySelector(".starter-container");

//GRASS
const grassBtn = document.querySelector("#grassBtn");
grassBtn.addEventListener("click", grassPokemon);

async function grassPokemon() {

  let grassType = [810, 495, 650, 722, 387, 152, 252, 1];
  let randomGrass = Math.floor(Math.random() * grassType.length);
  let randomPokemonID = grassType[randomGrass];

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    let grassImg = document.createElement("img");
    grassImg.src = res.data.sprites.front_default;
    starterImg.append(grassImg);

    let grassName = document.createElement("h3");
    grassName.innerText = res.data.name;
    starterName.append(grassName);

  } catch (error) {
    console.log(error);
  }
}

//FIRE
const fireBtn = document.querySelector("#fireBtn");
fireBtn.addEventListener("click", firePokemon);

async function firePokemon() {

  let fireType = [813, 498, 653, 725, 390, 155, 255, 4];
  let randomFire = Math.floor(Math.random() * fireType.length);
  let randomPokemonID = fireType[randomFire];

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    let fireImg = document.createElement("img");
    fireImg.src = res.data.sprites.front_default;
    starterImg.append(fireImg);

    let fireName = document.createElement("h3");
    fireName.innerText = res.data.name;
    starterName.append(fireName);

  } catch (error) {
    console.log(error);
  }
}

//WATER
const waterBtn = document.querySelector("#waterBtn");
waterBtn.addEventListener("click", waterPokemon);

async function waterPokemon() {

  let waterType = [816, 501, 656, 728, 393, 158, 258, 7];
  let randomWater = Math.floor(Math.random() * waterType.length);
  let randomPokemonID = waterType[randomWater];

  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);

    let waterImg = document.createElement("img");
    waterImg.src = res.data.sprites.front_default;
    starterImg.append(waterImg);

    let waterName = document.createElement("h3");
    waterName.innerText = res.data.name;
    starterName.append(waterName);

  } catch (error) {
    console.log(error);
  }
}

// const resetScreen = () => {
//   starterContainer.classList.remove("hide");
//   for (const type of )
// }

// function clearLastPokemon() {
//   const pokemon = document.querySelectorAll('.starter-container div')
//   for (let i = 0; i < pokemon.length; i++) {
//     pokemon[i].parentNode.removeChild(pokemon[i])
//   }

// function removeOldContent() {
//   starterContainer.innerHTML = "";
// };

// function reset() {
//   document.querySelector(".pokemon-image").reset();
// }