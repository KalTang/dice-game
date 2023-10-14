// Random numbers
var randomNumPlayer1 = Math.floor(Math.random() * 6) + 1;
var randomNumPlayer2 = Math.floor(Math.random() * 6) + 1;

// condition
// compare the two ints

if (randomNumPlayer1 > randomNumPlayer2) {
    diceRolls();
    document.querySelector('h1').innerHTML = 'Player 1 wins';
} else if (randomNumPlayer1 === randomNumPlayer2) {
    diceRolls();
    console.log('draw');
    document.querySelector('h1').innerHTML = 'Draw... no winner.';
} else {
    diceRolls();
    document.querySelector('h1').innerHTML = 'Player 2 wins';
}
// based on the number on random numbers given.
// will change the file name by changing the last digit of that file to match the corresponding image name.
function diceRolls() {
    document.getElementById(
        'img1'
    ).src = `./images/dice${randomNumPlayer1}.png`;

    document.getElementById(
        'img2'
    ).src = `./images/dice${randomNumPlayer2}.png`;
}

// reload page button
function refreshPage() {
    window.location.reload();
}
