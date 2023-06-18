export{createCard, clearCard}

let main = document.getElementById('results');
let mainWrapper = document.createElement('div');

function createCard(picture, name, HP, type, moveOneName, moveDescript, pp, randNameTwo, randDescTwo, ppTwo){
//create Card
    mainWrapper.classList='card';
    checkBackground(type)

//create name and HP div

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



    main.appendChild(mainWrapper);


}

function clearCard(){
    main.innerHTML='';
    mainWrapper.innerHTML = '';
}

function checkBackground(type){
    if (type==='electric'){
        mainWrapper.style.backgroundImage='url(../src/img/cardBackYellow.png)';
    } else if (type === 'fire'){
        mainWrapper.style.backgroundImage='url(../src/img/cardBackRed.png)';
    } else if (type === 'grass'){
        mainWrapper.style.backgroundImage='url(../src/img/cardBackGreen.png)';
    } else if (type === 'water'){
        mainWrapper.style.backgroundImage='url(../src/img/cardBackBlue.png)';
    } else {
            mainWrapper.style.backgroundImage='url(../src/img/cardBackOrange.png)';
    }
}