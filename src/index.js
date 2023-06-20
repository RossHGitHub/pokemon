import './style.css';
import { processData, randomPokemon } from './apiFunctions';
import { createCard } from './cards';


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const randomPokemonButton = document.getElementById('randomButton')
const err = document.getElementById('err')


searchButton.addEventListener('click', ()=>{
    if (searchInput.value === 'mr. meeseeks'){
        let pic = '../src/img/mrMeeseeks.jpeg';
       
        createCard(pic, 'Mr. Meeseeks', 100, 'water', 'CAN DOOO', 'Helps you get 2 strokes off your golf game', 99, 'EXISTENCE IS PAIN', "It's getting wiierdd", 99);
    } else {
    err.removeAttribute('class', 'err')
    err.innerHTML=''
    processData(searchInput.value);
   

    searchInput.value=''
   
    }
    ;});

    randomPokemonButton.addEventListener('click', ()=>{
        err.removeAttribute('class', 'err')
        err.innerHTML='';
        randomPokemon()
        searchInput.value=''
    });