import './style.css';
import { getData } from './apiFunctions';
import { processData } from './apiFunctions';
import { clearCard } from './cards';


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


searchButton.addEventListener('click', ()=>{
    clearCard()
    processData(searchInput.value);
    searchInput.value=''

    ;});