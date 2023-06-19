let cartQuantity = 0;

score ={
    wins:0,
    loses:0,
    ties:0
}
score = JSON.parse(localStorage.getItem('score')) || {
    wins :0,
    loses:0,
    ties:0
};
function ComputerMove(){
    randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >=0 && randomNumber <= 1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber > 1/3 && randomNumber <= 2/3){
        computerMove = 'Paper';
    }
    else{
        computerMove = 'Scissors';
    }
    return computerMove;
}
function PlayGame(PlayerMove){
    let computerMove = ComputerMove();
    let result ='';
    if(PlayerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'tie';
        }
        else if(computerMove === 'Paper'){
            result = 'You lose.';
        }
        else{
            result = 'You Win.';
        }

        if(result == 'You Win.'){
            ++score.wins;
        }
        else if(result == 'You lose.'){
            ++score.loses;
        }
        else if(result == 'tie.'){
            ++score.ties;

        }
        localStorage.setItem('score', JSON.stringify(score));
        document.querySelector('.result').innerHTML = result;
        document.querySelector('.chooise').innerHTML = `You ${PlayerMove} - ${computerMove} Computer`;
        resultElement();

        // alert(`The computer choose ${computerMove}, your choose is ${PlayerMove}, ${result}\nWins = ${score.wins}, Loses = ${score.loses}, Ties = ${score.ties}`);
    }
    else if(PlayerMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You Win.';
            }
            else if(computerMove === 'Paper'){
                result = 'tie.';
            }
            else{
                result = 'You lose.';
            }
            if(result == 'You Win.'){
                ++score.wins;
            }
            else if(result == 'You lose.'){
                ++score.loses;
            }
            else if(result == 'tie.'){
                ++score.ties;
    
            }
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.result').innerHTML = result;
            document.querySelector('.chooise').innerHTML = `You ${PlayerMove} - ${computerMove} Computer`;
            resultElement();
            // alert(`The computer choose ${computerMove}, your choose is ${PlayerMove}, ${result}\nWins = ${score.wins}, Loses = ${score.loses}, Ties = ${score.ties}`);
    }

    else if(PlayerMove === 'Scissors'){
            if(computerMove === 'Rock'){
                result = 'You lose.';
            }
            else if(computerMove === 'Paper'){
                result = 'You Win.';
            }
            else{
                result = 'tie.';
            }
            if(result == 'You Win.'){
                ++score.wins;
            }
            else if(result == 'You lose.'){
                ++score.loses;
            }
            else if(result == 'tie.'){
                ++score.ties;
    
            }
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.result').innerHTML = result;
            document.querySelector('.chooise').innerHTML = `You ${PlayerMove} - ${computerMove} Computer`;  
            resultElement();
            // alert(`The computer choose ${computerMove}, your choose is ${PlayerMove}, ${result}\nWins = ${score.wins}, Loses = ${score.loses}, Ties = ${score.ties}`);
    }
}
function resultElement(){
    
    document.querySelector('.game_score').innerHTML = `Wins = ${score.wins}, Loses = ${score.loses}, Ties = ${score.ties}`;
}
function subscribeChanel(){
    const buttonElement = document.querySelector('#subscribe_btn');
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
    }
    else{
        buttonElement.innerText = 'Subscribe';
    }
}