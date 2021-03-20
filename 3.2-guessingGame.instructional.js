// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

// declare varables 
const answer = parseInt(Math.random() * 10);
gameLost = false;
const form = document.getElementById('main');
let guess = document.getElementById('input');


// event listener
form.addEventListener('submit', start);

function start(e){
    e.preventDefault();
    i = 1;
    console.log('guess', guess.value);
    console.log('answer', answer)
    console.log('counter', i);
    while(i < 3){
        if(guess.value == answer){
            window.alert('You win you guessed the anwser');
        } else if(guess.value > answer){
            window.alert('Not quite go a little lower');
            i = i + 1;
            console.log(i); 
        } else {
            window.alert('Not quite go a little higher')
            i = i + 1
            console.log(i);
        }
    }
}

// function start(guess){
//     e.preventDefault();
//     if(guess === answer){
//         reponse = form.createElement('p');
//         response.innerText(`Great job you guessed correctly!`);
//         form.appendChild(response);           
//     } else{
//         reponse = form.createElement('p');
//         response.innerText(`Sorry your guess is wrong try again`);
//         form.appendChild(response);         
//     }       
// }