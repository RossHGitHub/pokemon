import { createCard } from "./cards";
export {createOwn}

function createOwn(){
    let main = document.getElementById('results');

    let mainWrapper = document.createElement('div');
    mainWrapper.classList='createMain';
    main.appendChild(mainWrapper);
   
      mainWrapper.style.opacity = '0'
       mainWrapper.style.transform = 'translate(-120px) rotateY(90deg)';
       mainWrapper.style.zIndex = '';
      mainWrapper.style.transition = 'transform 0.5s, opacity 0.5s';
  
      setTimeout(function() {
          mainWrapper.style.top = '';
          mainWrapper.style.right = '';
          mainWrapper.style.transform = '';
          mainWrapper.style.zIndex = '';
          mainWrapper.style.opacity='1'
          mainWrapper.style.boxShadow = '';
      }, 10);
   

    let remove = document.createElement('div');
    remove.innerHTML='X';
    remove.classList='removeCreate';
    mainWrapper.appendChild(remove);

    remove.addEventListener('click',()=>{
      main.removeChild(mainWrapper);
    })

   
    // Create the form element
let form = document.createElement('form');
form.classList='form';
// Create the input fields
let characterNameInput = createInput('text', 'characterName', 'Character Name');
let hpInput = createInput('number', 'hp', 'HP');
let type = createInput('text', 'pokemonType', 'Pokemon Type');
let moveOneNameInput = createInput('text', 'moveOneName', 'Move One Name');
let moveOneDescriptionInput = createInput('text', 'moveOneDescription', 'Move One Description');
let moveOneHP = createInput('text', 'moveOneHP', 'Move One HP');
let moveTwoNameInput = createInput('text', 'moveTwoName', 'Move Two Name');
let moveTwoDescriptionInput = createInput('text', 'moveTwoDescription', 'Move Two Description');
let moveTwoHP = createInput('text', 'moveTwoHP', 'Move Two HP');

// Append the input fields to the form
form.appendChild(characterNameInput);
form.appendChild(hpInput);
form.appendChild(type);
form.appendChild(moveOneNameInput);
form.appendChild(moveOneDescriptionInput);
form.appendChild(moveOneHP);
form.appendChild(moveTwoNameInput);
form.appendChild(moveTwoDescriptionInput);
form.appendChild(moveTwoHP);

// Create a submit button
let submitButton = document.createElement('input');
submitButton.type = 'button';
submitButton.value = 'Submit';

// Append the submit button to the form
form.appendChild(submitButton);

// Append the form to the body of the HTML document
mainWrapper.appendChild(form);

// Function to create an input field
function createInput(type, name, placeholder) {
  var input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.classList='createInputs'
  return input;
}

    submitButton.addEventListener('click',()=>{
      main.removeChild(mainWrapper);
      createCard('', characterNameInput.value, hpInput.value, type.value,moveOneNameInput.value, moveOneDescriptionInput.value, moveOneHP.value, moveTwoNameInput.value, moveTwoDescriptionInput.value, moveTwoHP.value);
    })
}