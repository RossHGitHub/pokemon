export{createCard, clearCard}

let main = document.getElementById('results');
let mainWrapper = document.createElement('div');

function createCard(picture, name, HP, type, moveOne, moveTwo){
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