var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

window.onload = function () {
    for (let i = 0; i < choices.length; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + '.jpg';
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').append(choice);
    }
}

function selectChoice () {
    you = this.id;
    document.getElementById('your-choice').src = you + '.jpg';

    // random for opponent

    opponent = choices[Math.floor(Math.random() * 5)]; 
    document.getElementById('opponents-choice').src = opponent + '.jpg'


// check for winner
if (you == opponent) {
    yourScore += 1;
    opponentScore += 1;
} 

else {
    if (you == 'rock') {
        if (opponent == 'scissors') {
            yourScore += 1;
        if (opponent == 'lizard') {
            yourScore += 1;
        } 
    }
        else if (opponent == 'paper') {
                 opponentScore += 1;
              if (opponent == 'spock') {
                opponentScore += 1;
        }
    } 


    }
   else if (you == 'paper') {
        if (opponent == 'rock') {
            yourScore += 1;
          if (opponent == 'spock') {
            yourScore += 1;
        } 
    } 
        else if (opponent == 'scissors') {
            opponentScore += 1;
            if (opponent == 'lizard') {
            opponentScore += 1;
        }
    }



    }
   else if (you == 'scissors') {
        if (opponent == 'paper') {
            yourScore += 1;
            if (opponent == 'lizard') {
            yourScore += 1;
        } 
    } 
        else if (opponent == 'rock') {
            opponentScore += 1;
            if (opponent == 'spock') {
            opponentScore += 1;
        }
    }



    }
   else if (you == 'lizard') {
        if (opponent == 'spock') {
            yourScore += 1;
            if (opponent =='paper') {
            yourScore += 1;
        } 
    } 
        else if (opponent == 'rock') {
            opponentScore += 1;
            if (opponent == 'scissors') {
            opponentScore += 1;
        }
    }



    }
   else if (you == 'spock') {
        if (opponent == 'scissors') {
            yourScore += 1;
            if (opponent == 'rock') {
            yourScore += 1;
        } 
    } 
        else if (opponent == 'paper') {
            opponentScore += 1;
            if (opponent == 'lizard') {
            opponentScore += 1;
        }
    }
  }

}
   
   
   document.getElementById('your-score').innerText = yourScore;
   document.getElementById('opponent-score').innerText = opponentScore;
}

/*
if(you === opponent){
        result.textContent = "Would you look at that! It's a tie!"
    }
    else if(you == 'rock'){
        if(opponent == 'paper', 'spock'){
            result.textContent = 'Computer Won.';
            opponentScore++;
            opponentScoreBoard.textContent = opponentScore;

        }else{
            result.textContent = 'You Won!'
            yourScore++;
            yourScoreBoard.textContent = yourScore;
        }
    }
    else if(you == 'scissors'){
        if(opponent == 'rock', 'spock'){
            result.textContent = 'Computer Won.';
            opponentScore++;
            opponentScoreBoard.textContent = opponentScore;
        }else{
            result.textContent = 'You Won!';
            yourScore++;
            yourScoreBoard.textContent = yourScore;
        }
    }
    else if(you == 'paper'){
        if(opponent == 'scissors', 'lizard'){
            result.textContent = 'Computer Won.';
            opponentScore++;
            opponentScoreBoard.textContent = opponentScore;
        }else{
            result.textContent = 'You Won!';
            yourScore++;
            yourScoreBoard.textContent = yourScore;
        }
    }
    else if(you == 'lizard'){
        if(opponent == 'rock', 'scissors'){
            result.textContent = 'Computer Won.';
            opponentScore++;
            opponentScoreBoard.textContent = opponentScore;
        }else{
            result.textContent = 'You Won!';
            yourScore++;
            yourScoreBoard.textContent = yourScore;
        }
    }
    else if(you == 'spock'){
        if(opponent == 'lizard', 'paper'){
            result.textContent = 'Computer Won.';
            opponentScore++;
            opponentScoreBoard.textContent = opponentScore;
        }else{
            result.textContent = 'You Won!';
            yourScore++;
            yourScoreBoard.textContent = yourScore;
        }

        document.getElementById('your-score').innerText = yourScore;
        document.getElementById('opponent-score').innerText = opponentScore;
    }

    */