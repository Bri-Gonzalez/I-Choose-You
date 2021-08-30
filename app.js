const URL = "https://pokeapi.co/api/v2/pokemon/"
const starterPokemon = document.querySelector(".starter-pokemon");



//Grass Type Button



// Fire Type Button
const fireBtn = document.querySelector("#fireBtn");
fireBtn.addEventListener("click", firePokemon);

async function firePokemon() {

  let fireType = [813, 498, 653, 725, 390, 155, 255, 4];
  let randomFire = Math.floor(Math.random() * fireType.length);
  let randomPokemonID = fireType[randomFire];
  try {
    let res = await axios.get(`${URL}${randomPokemonID}`);
    // Grab fire type name
    let fireName = document.createElement("h3");
    fireName.innerText = res.data.name;
    starterPokemon.append(fireName);
    // Grab fire type sprite
    let fireImg = document.createElement("img");
    fireImg.src = res.data.sprites.front_default;
    starterPokemon.append(fireImg);

  } catch (error) {
    console.log(error);
  }
}

//Water Type Button