// const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
const URL = "https://pokeapi.co/api/v2/pokemon/"

const button = document.querySelector(".pokeball");
const starterPokemon = document.querySelector(".starter-pokemon");

button.addEventListener("click", pokemonGenerator);

async function pokemonGenerator() {
  let fireType = [4, 25, 37, 58, 77, 126];
  let randomFire = Math.floor(Math.random() * fireType.length);
  // let randomPokemonID = Math.floor(Math.random() * 151) + 1;
  let randomPokemonID = fireType[randomFire];
  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);
    let fireName = document.createElement("h3");
    fireName.innerText = res.data.name;
    starterPokemon.append(fireName);

    // let fireImg = document.createElement("img");
    // fireImg.src = res.data.sprites["font_default"];
    // starterPokemon.append(fireImg);

  } catch (error) {
    console.log(error);
  }
}


    // let fireName = res.data.name;
    // starterPokemon.append(fireName);
    // let fireImg = res.data.sprites.['front_default'];
    // pokemonImg.append.apply(fireImg);

    // const pokemon = {
    //   name: res.data.name,
    //   image: res.data.sprites,
    // }
    // // starterPokemon.append(pokemon);
    // console.log(Object.values(pokemon))

        // res.data.forEach((fire) => {
    // let fireName = document.createElement("h3");
    // fireName.innerText = fire.name;
    // starterPokemon.append(fireName);

    // let fireImg = document.createElement("img");
    // fireImg.src = fire.sprites[];
    // starterPokemon.append(fireImg);
    // })