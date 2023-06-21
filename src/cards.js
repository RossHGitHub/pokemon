export{createCard}

let main = document.getElementById('results');
let resultsArray = [];
function createCard(picture, name, HP, type, moveOneName, moveDescript, pp, randNameTwo, randDescTwo, ppTwo){
//create Card

let mainWrapper = document.createElement('div');
    mainWrapper.classList='card';
    checkBackground(mainWrapper, type)


//create close button, name and HP div

    let removeCard = document.createElement('div')
    removeCard.classList='removeCard';
    removeCard.innerHTML='X'
    removeCard.addEventListener('click', ()=>{
            const index = resultsArray.indexOf(mainWrapper);
            if (index > -1) {
              resultsArray.splice(index, 1);
              mainWrapper.innerHTML = '';
              mainWrapper.style.display='none';
            }
    });
    mainWrapper.appendChild(removeCard);

    let nameAndHP = document.createElement('div')
    nameAndHP.classList='topStats';


    let nameHolder = document.createElement('div');
    nameHolder.innerHTML=name;
    nameHolder.classList='cardName';
    nameAndHP.appendChild(nameHolder);


    let hp = document.createElement('div');
    hp.innerHTML=HP;
    hp.classList='hp';
    nameAndHP.appendChild(hp);

    mainWrapper.appendChild(nameAndHP);
    
    
//create Picture Holder
    let pictureHolder = document.createElement('img')
    pictureHolder.src=picture;
    pictureHolder.classList='cardPic'
    mainWrapper.appendChild(pictureHolder);

//create Move One

    let moveOneWrapper = document.createElement('div');
    moveOneWrapper.classList='move';

    let moveName = document.createElement('div');
    moveName.classList='moveName';
    moveName.innerHTML= moveOneName;
    moveOneWrapper.appendChild(moveName)

    let moveDesc = document.createElement('div');
    moveDesc.classList='moveDesc';
    moveDesc.innerHTML=moveDescript;
    moveOneWrapper.appendChild(moveDesc);

    let movePP = document.createElement('div');
    movePP.classList='pp';
    movePP.innerHTML=pp;
    moveOneWrapper.appendChild(movePP);

    mainWrapper.appendChild(moveOneWrapper);

//create Move Two
    let moveTwoWrapper = document.createElement('div');
    moveTwoWrapper.classList='move';

    let moveTwoName = document.createElement('div');
    moveTwoName.classList='moveName';
    moveTwoName.innerHTML= randNameTwo;
    moveTwoWrapper.appendChild(moveTwoName)

    let moveTwoDesc = document.createElement('div');
    moveTwoDesc.classList='moveDesc';
    moveTwoDesc.innerHTML=randDescTwo;
    moveTwoWrapper.appendChild(moveTwoDesc);


    let moveTwoPP = document.createElement('div');
    moveTwoPP.classList='pp';
    moveTwoPP.innerHTML=ppTwo;
    moveTwoWrapper.appendChild(moveTwoPP);

    

mainWrapper.appendChild(moveTwoWrapper);


resultsArray.unshift(mainWrapper);
resultsArray.forEach((element) => {
    main.appendChild(element);
});

showCard(mainWrapper);


}


function checkBackground(main, type){
    if (type==='electric'){
        main.style.backgroundImage='url(../src/img/cardBackYellow.png)';
    } else if (type === 'fire'){
        main.style.backgroundImage='url(../src/img/cardBackRed.png)';
    } else if (type === 'grass'){
        main.style.backgroundImage='url(../src/img/cardBackGreen.png)';
    } else if (type === 'water'){
        main.style.backgroundImage='url(../src/img/cardBackBlue.png)';
    } else {
            main.style.backgroundImage='url(../src/img/cardBackOrange.png)';
    }
}

function showCard(card) {
   
    card.style.left = '140px'
    card.style.opacity = '0'
     card.style.transform = 'translate(-120px) rotateY(90deg)';
     card.style.zIndex = '';
    card.style.transition = 'transform 2s, opacity 2s';

    setTimeout(function() {
        card.style.top = '';
        card.style.right = '';
        card.style.transform = '';
        card.style.zIndex = '';
        card.style.opacity='1'
        card.style.boxShadow = '';
    }, 10);
 };