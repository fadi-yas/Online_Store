let cartQuantity = 0;



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
        alert(`The computer choose ${computerMove}, your choose is ${PlayerMove}, ${result}`);
    }
    else if(PlayerMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You win.';
            }
            else if(computerMove === 'Paper'){
                result = 'tie';
            }
            else{
                result = 'You lose.';
            }
            alert(`The computer choose ${computerMove}, your choose is ${PlayerMove}, ${result}`);
    }

    else if(PlayerMove === 'Scissors'){
            if(computerMove === 'Rock'){
                result = 'You lose.';
            }
            else if(computerMove === 'Paper'){
                result = 'You win.';
            }
            else{
                result = 'tie.';
            }
            alert(`The computer choose ${computerMove}, your choose is ${PlayerMove}, ${result}`);
    }
}