export {game};
import { createCard } from "./cards";
import { randomPokemon } from "./apiFunctions";

const game = () => {

    let score = 0;
    let turn = 1;
    let results = document.getElementById('results');
    let main = document.getElementById('mainWrapper');
    let body = document.querySelector('body');
    

    let questionArray = [
        { question: 'What is 1 + 1?', ans: 2 },
        { question: 'What is 2 + 2?', ans: 4 },
        { question: 'What is 3 + 3?', ans: 6 },
        { question: 'What is 4 + 4?', ans: 8 },
        { question: 'What is 5 + 5?', ans: 10 },
        { question: 'What is 6 + 6?', ans: 12 },
        { question: 'What is 7 + 7?', ans: 14 },
        { question: 'What is 8 + 8?', ans: 16 },
        { question: 'What is 9 + 9?', ans: 18 },
        { question: 'What is 10 + 10?', ans: 20 },
        { question: 'What is 2 - 1?', ans: 1 },
        { question: 'What is 4 - 2?', ans: 2 },
        { question: 'What is 6 - 3?', ans: 3 },
        { question: 'What is 8 - 4?', ans: 4 },
        { question: 'What is 10 - 5?', ans: 5 },
        { question: 'What is 12 - 6?', ans: 6 },
        { question: 'What is 14 - 7?', ans: 7 },
        { question: 'What is 16 - 8?', ans: 8 },
        { question: 'What is 18 - 9?', ans: 9 },
        { question: 'What is 20 - 10?', ans: 10 },
        { question: 'What is 2 x 1?', ans: 2 },
        { question: 'What is 2 x 2?', ans: 4 },
        { question: 'What is 3 x 2?', ans: 6 },
        { question: 'What is 4 x 2?', ans: 8 },
        { question: 'What is 5 x 2?', ans: 10 },
        { question: 'What is 6 x 2?', ans: 12 },
        { question: 'What is 7 x 2?', ans: 14 },
        { question: 'What is 8 x 2?', ans: 16 },
        { question: 'What is 9 x 2?', ans: 18 },
        { question: 'What is 10 x 2?', ans: 20 },
        { question: 'What is 4 ÷ 2?', ans: 2 },
        { question: 'What is 6 ÷ 2?', ans: 3 },
        { question: 'What is 8 ÷ 2?', ans: 4 },
        { question: 'What is 10 ÷ 2?', ans: 5 },
        { question: 'What is 12 ÷ 2?', ans: 6 },
        { question: 'What is 14 ÷ 2?', ans: 7 },
        { question: 'What is 16 ÷ 2?', ans: 8 },
        { question: 'What is 18 ÷ 2?', ans: 9 }];
      
    const init = () => {
        main.innerHTML='';
        results.innerHTML='';
        let gameDesc = document.createElement('div');
        gameDesc.classList='gameDesc';
        gameDesc.innerHTML='Do you have what it takes to beat Team Rocket!? You have 5 chances to answer questions to get Pokémon cards, and get enough Pokémon strength to beat them!'
        let startButton = document.createElement('button')
        startButton.classList='searchItem';
        startButton.innerHTML='Begin'


        main.appendChild(gameDesc)
        main.appendChild(startButton);

        startButton.addEventListener('click', ()=>{
            body.removeChild(main);
            results.innerHTML='';
            game();
        })

    }


const initRound = ()=>{
        

        //create playspace
        let mainWrap = document.createElement('div');
        mainWrap.classList='mainGameWrap';
        body.appendChild(mainWrap);

        let questionDiv = document.createElement('div')
        questionDiv.classList='question';
        mainWrap.appendChild(questionDiv);

        let turnCount = document.createElement('div');
        turnCount.classList='turnCount'
        turnCount.innerHTML = `Turn ${turn} / 5`;
        mainWrap.appendChild(turnCount);

        let answerDiv = document.createElement('input')
        answerDiv.classList='answer';
        mainWrap.appendChild(answerDiv)

        let answerButton = document.createElement('button');
        answerButton.setAttribute('type', 'button');
        answerButton.classList='searchItem';
        answerButton.innerHTML='Submit';
        mainWrap.appendChild(answerButton);

        
        let counter = document.createElement('div');
        counter.classList='counter';
        counter.innerHTML= `Score: ${score}`;
        
        mainWrap.appendChild(counter);

        return {questionDiv, answerDiv, answerButton, mainWrap}
     
    }

    const game = () => {
        //Game math
        let randomNum = Math.floor(Math.random()*questionArray.length);
        let randomRandom = questionArray[randomNum];
        let randomQuest = randomRandom.question;
        let randomQuestionAns = randomRandom.ans;

        let playSpace = initRound();
        playSpace.questionDiv.innerHTML=randomQuest;

        playSpace.answerButton.addEventListener('click',()=>{
        
            turn++;
            turnCheck();
            let userAns = playSpace.answerDiv.value;
            playSpace.mainWrap.innerHTML='';
            if (userAns == randomQuestionAns){
                score++;
                console.log('win')
                game();
            } else {
                console.log('lose')
                game();
            }});
    
        return {randomQuest, randomQuestionAns}}


        const turnCheck = () =>{
            console.log(turn);
            if(turn==6){
            
            endGame();
        
            }
        };

        const endGame = () => {
            for (let i=score; i<score; i++){
                randomPokemon()
            }
        }

    


return {score, init, initRound}
}