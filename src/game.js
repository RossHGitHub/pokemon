export {game};

const game = () => {

    let score = 0;
    let results = document.getElementById('results');
    let main = document.getElementById('mainWrapper');
    let body = document.querySelector('html');
    

    let questionArray = [
        { question: 'What is 1 + 1?', ans: '2' },
        { question: 'What is 2 + 2?', ans: '4' },
        { question: 'What is 3 + 3?', ans: '6' },
        { question: 'What is 4 + 4?', ans: '8' },
        { question: 'What is 5 + 5?', ans: '10' },
        { question: 'What is 6 + 6?', ans: '12' },
        { question: 'What is 7 + 7?', ans: '14' },
        { question: 'What is 8 + 8?', ans: '16' },
        { question: 'What is 9 + 9?', ans: '18' },
        { question: 'What is 10 + 10?', ans: '20' },
        { question: 'What is 2 - 1?', ans: '1' },
        { question: 'What is 4 - 2?', ans: '2' },
        { question: 'What is 6 - 3?', ans: '3' },
        { question: 'What is 8 - 4?', ans: '4' },
        { question: 'What is 10 - 5?', ans: '5' },
        { question: 'What is 12 - 6?', ans: '6' },
        { question: 'What is 14 - 7?', ans: '7' },
        { question: 'What is 16 - 8?', ans: '8' },
        { question: 'What is 18 - 9?', ans: '9' },
        { question: 'What is 20 - 10?', ans: '10' },
        { question: 'What is 2 x 1?', ans: '2' },
        { question: 'What is 2 x 2?', ans: '4' },
        { question: 'What is 3 x 2?', ans: '6' },
        { question: 'What is 4 x 2?', ans: '8' },
        { question: 'What is 5 x 2?', ans: '10' },
        { question: 'What is 6 x 2?', ans: '12' },
        { question: 'What is 7 x 2?', ans: '14' },
        { question: 'What is 8 x 2?', ans: '16' },
        { question: 'What is 9 x 2?', ans: '18' },
        { question: 'What is 10 x 2?', ans: '20' },
        { question: 'What is 4 ÷ 2?', ans: '2' },
        { question: 'What is 6 ÷ 2?', ans: '3' },
        { question: 'What is 8 ÷ 2?', ans: '4' },
        { question: 'What is 10 ÷ 2?', ans: '5' },
        { question: 'What is 12 ÷ 2?', ans: '6' },
        { question: 'What is 14 ÷ 2?', ans: '7' },
        { question: 'What is 16 ÷ 2?', ans: '8' },
        { question: 'What is 18 ÷ 2?', ans: '9' }];
      
    const init = () => {
        main.innerHTML='';

        let startButton = document.createElement('button')
        startButton.classList='gameButton';
        let questionDiv = document.createElement('div')
        questionDiv.classList='question';
        let answerDiv = document.createElement('div')
        answerDiv.classList='answer';
        
        main.appendChild(startButton);
        main.appendChild(questionDiv);
        main.appendChild(answerDiv);
        score = 0;

    }
    const playRound = ()=>{

            let randomNum = Math.floor(Math.random()*questionArray.length);
            let randomRandom = questionArray[randomNum];
            let randomQuest = randomRandom.question;
            let randomQuestionAns = randomRandom.ans;
         
            let answer = prompt(randomRandom.question)
            if (answer==randomRandom.ans){
         
         
         
         
         console.log(questionArray);
    }
}

return {score, init, playRound}
}