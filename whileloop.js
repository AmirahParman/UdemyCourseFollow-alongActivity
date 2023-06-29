let maximumNumber = parseInt(prompt('Set a maximum number'));
while (!maximumNumber) {
    maximumNumber = parseInt(prompt('Enter a valid number'))
}

let guess = parseInt(prompt('Take your first guess'));
let targetNumber = Math.floor(Math.random() * maximumNumber);

console.log('Target is ' + targetNumber);
console.log('your guess is ' + guess)

while (parseInt(guess) !== targetNumber) {
    if (guess > targetNumber) {
        guess = prompt('Number is too high. Guess again');

    }
    else if (guess < targetNumber) {
        guess = prompt('Number is too low. Guess again');
    }

    if (guess === 'q') {
        break;
    }
}

if (parseInt(guess) === targetNumber) {
    console.log('CONGRATS!')
} else if (guess === 'q') {
    console.log('You have quit the game')
}
