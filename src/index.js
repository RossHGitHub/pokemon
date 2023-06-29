import './style.css';
import { processData, randomPokemon } from './apiFunctions';
import { createCard } from './cards';
import { createOwn } from './createOwn';
import { game } from './game';


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const randomPokemonButton = document.getElementById('randomButton');
const err = document.getElementById('err');
const noOfCards = document.getElementById('noOfPokemon');
const create = document.getElementById('createOwn');
let gameButton = document.getElementById('playGame');

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

    noOfCards.addEventListener('click', ()=>{
        alert("This is a buggy feature, it won't generate exactly the number you requested (But I am working on it).")
       const num = prompt('How many Pokemon cards would you like?', 'Max 100');

       if(num>100){
        alert('Max 100!')
       } else {
       for (let i = 0; i < num; i++) {
        randomPokemon();
    }}});

create.addEventListener('click', ()=>{
    createOwn();
})

gameButton.addEventListener('click', ()=>{
const playGame = game();

playGame.init();
})

