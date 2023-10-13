// Random numbers
var randomNumPlayer1 = Math.floor(Math.random() * 6) + 1;
var randomNumPlayer2 = Math.floor(Math.random() * 6) + 1;

// image array
// var diceArray = [
//     'dice1.png',
//     'dice2.png',
//     'dice3.png',
//     'dice4.png',
//     'dice5.png',
//     'dice6.png',
// ];

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
// test rolls
function diceRolls() {
    document.getElementById(
        'img1'
    ).src = `./images/dice${randomNumPlayer1}.png`;

    document.getElementById(
        'img2'
    ).src = `./images/dice${randomNumPlayer2}.png`;
}

function refreshPage() {
    window.location.reload();
}
