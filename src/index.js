import './style.css';
import { getData } from './apiFunctions';
import { processData } from './apiFunctions';


const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


searchButton.addEventListener('click', ()=>{processData(searchInput.value);});