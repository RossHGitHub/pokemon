import './style.css';
import { getData } from './apiFunctions';
import { processData, randomPokemon } from './apiFunctions';
import { clearCard } from './cards';


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const randomPokemonButton = document.getElementById('randomButton')


searchButton.addEventListener('click', ()=>{
    clearCard()
    processData(searchInput.value);
    searchInput.value=''

    ;});

    randomPokemonButton.addEventListener('click', ()=>{
        clearCard()
        randomPokemon()
        searchInput.value=''
    })