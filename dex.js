const URL = "https://pokeapi.co/api/v2/pokemon/";
const typeURL = "https://pokeapi.co/api/v2/type/";
const input = document.querySelector("input");
const pokedexContainer = document.querySelector(".pokedex-container");
const pokemonName = document.querySelector(".pokemon-name");
const pokemonImg = document.querySelector(".pokemon-img");
const pokemonID = document.querySelector(".id");
const pokemonTypes = document.querySelector(".type");
const pokemonHeight = document.querySelector(".height");
const pokemonWeight = document.querySelector(".weight");
const pokemonStats = document.querySelector(".stats");


function appendImg(url) {
  let img = document.createElement("img");
  img.src = url;
  pokemonImg.append(img);
}

function appendName(text) {
  let h3 = document.createElement("h3");
  h3.innerText = text;
  pokemonName.append(h3);
}

function appendID(text) {
  let h3 = document.createElement("h3");
  h3.innerText = `#${text}`
  pokemonID.append(h3);
}

function appendTypes(text) {
  let h3 = document.createElement("h3");
  h3.innerText = text;
  pokemonTypes.append(h3);
}

function appendHeight(text) {
  let p = document.createElement("p");
  p.innerText = `Height: ${text}`;
  pokemonHeight.append(p);
}

function appendWeight(text) {
  let p = document.createElement("p");
  p.innerText = `Weight: ${text}`;
  pokemonWeight.append(p);
}

function appendHP(text) {
  let p = document.createElement("p");
  p.innerText = `HP: ${text}`;
  pokemonStats.append(p);
}

function appendAttack(text) {
  let p = document.createElement("p");
  p.innerText = `Attack: ${text}`;
  pokemonStats.append(p);
}

function appendDefense(text) {
  let p = document.createElement("p");
  p.innerText = `Defense: ${text}`;
  pokemonStats.append(p);
}

function appendSpAtk(text) {
  let p = document.createElement("p");
  p.innerText = `Sp. Atk: ${text}`;
  pokemonStats.append(p);
}

function appendSpDef(text) {
  let p = document.createElement("p");
  p.innerText = `Sp. Def: ${text}`;
  pokemonStats.append(p);
}

function appendSpeed(text) {
  let p = document.createElement("p");
  p.innerText = `Speed: ${text}`;
  pokemonStats.append(p);
}

const button = document.querySelector("#search");
button.addEventListener("click", () => {
  removePokemon();
  pokemonSearch();
})

//SEARCH FUNCTION

async function pokemonSearch() {
  let search = input.value;

  try {
    let res = await axios.get(`${URL}${search}`);

    appendImg(res.data.sprites.front_default);
    appendImg(res.data.sprites.back_default);
    appendName(res.data.name);
    appendID(res.data.id);
    appendTypes(res.data.types[0].type.name);
    appendHeight(res.data.height);
    appendWeight(res.data.weight);
    appendHP(res.data.stats[0].base_stat);
    appendAttack(res.data.stats[1].base_stat);
    appendDefense(res.data.stats[2].base_stat);
    appendSpAtk(res.data.stats[3].base_stat);
    appendSpDef(res.data.stats[4].base_stat);
    appendSpeed(res.data.stats[5].base_stat);
    // appendTypes(res.data.types[1].type.name);

    // let backImg = res.data.sprites.back_default;
    // if (backImg === true) {
    //   return appendImg(backImg);
    // }

    // if (res.data.types[1].type.name === true) {
    //   return res.data.types[1].type.name
    // }


  } catch (error) {
    console.log(error);
  }
}

//BUTTON SEARCH FUNCTION
// const btn2 = document.querySelector(".btn2");
// btn2.addEventListener("click", () => {
//   removePokemon()
//   pokemonClickRight()
// })

// async function pokemonClickRight() {
//   let currentPokemon = input.value;

//   try {
//     let res = await axios.get(`${URL}${pokemon}`);

//     let pokemon = [];
//     for (i = 0; i < pokemon.length; i++) {
//       let currentPokemon = input.value[i]
//     }

//     // appendName(res.data.name);

//   } catch (error) {
//     console.log(error);
//   }
// }

//REMOVE LAST SEARCH
function removePokemon() {
  pokemonImg.innerHTML = "";
  pokemonName.innerHTML = "";
  pokemonID.innerHTML = "";
  pokemonTypes.innerHTML = "";
  pokemonHeight.innerHTML = "";
  pokemonWeight.innerHTML = "";
  pokemonStats.innerHTML = "";
}
