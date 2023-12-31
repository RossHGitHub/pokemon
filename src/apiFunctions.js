export {processData, randomPokemon}
import { createCard } from "./cards"

async function getData(searchTerm){
try{
    let basic = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    let pokemonData = await basic.json()
   console.log(pokemonData)

     return {pokemonData};
}
catch {

showErr()
}
}

    function storeData(pokemon){
   let pokeImg = pokemon.pokemonData.sprites.other["official-artwork"].front_default;
    let pokeName = pokemon.pokemonData.name
    let pokeCap = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    let HP = pokemon.pokemonData.stats[0].base_stat + ' HP';
    let type = pokemon.pokemonData.types[0].type.name;




    return {pokeImg, pokeCap, HP, type};
}

async function randomMove(pokemon){
try{
      const moves = pokemon.pokemonData.moves;
  
      const randomIndex = Math.floor(Math.random() * moves.length);
      const randomMove = moves[randomIndex];
      const randomMoveName = randomMove.move.name.toUpperCase();
  
      const moveResponse = await fetch(randomMove.move.url);
      const moveData = await moveResponse.json();

      const pp = moveData.pp;
  
      const moveDescriptions = moveData.flavor_text_entries;
    const firstDescription = moveDescriptions[1];

    if(firstDescription.language.name !== 'en'){
        return
    } else {
    let moveDescription = firstDescription.flavor_text

  
    return{randomMoveName, moveDescription, pp}
      
    }}
    catch {
        showErr()
    };
}
  


async function processData(searchTerm){
    try{
let data = await getData(searchTerm);
let storedData = await storeData(data);
let randomMov = await randomMove(data);
let randomMovTwo = await randomMove(data);
await createCard(storedData.pokeImg, storedData.pokeCap, storedData.HP, storedData.type, randomMov.randomMoveName, randomMov.moveDescription, randomMov.pp, randomMovTwo.randomMoveName, randomMovTwo.moveDescription, randomMovTwo.pp);
    }
    catch {
        showErr()
    }
}




async function randomPokemon(){
    try{
    let allPokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon');
    let allPokemonData = await allPokemonResponse.json();
    const totalPokemons = allPokemonData.count;

    const randomID = Math.floor(Math.random()*totalPokemons) + 1;

    processData(randomID)
    }
    catch{
        showErr();
    }
}

function showErr(){
    const err = document.getElementById('err');
    err.innerHTML='Error! Please try again.'
    err.classList='err';
}

