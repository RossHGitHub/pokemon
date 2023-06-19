import './style.css';
import { processData, randomPokemon } from './apiFunctions';
import { clearCard } from './cards';


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const randomPokemonButton = document.getElementById('randomButton')
const err = document.getElementById('err')


searchButton.addEventListener('click', ()=>{
    err.removeAttribute('class', 'err')
    err.innerHTML=''
    processData(searchInput.value);
    searchInput.value=''
   

    ;});

    randomPokemonButton.addEventListener('click', ()=>{
        err.removeAttribute('class', 'err')
        err.innerHTML='';
        randomPokemon()
        searchInput.value=''
    });