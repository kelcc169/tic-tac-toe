// Variables 

// var winCondArr = ['n0n1n2', 'n3n4n5', 'n6n7n8', 'n0n4n8', 'n2n4n6', 'n0n3n6', 'n1n4n7', 'n2n5n8'];
var filledSquares = {
    n0: false,
    n1: false,
    n2: false,
    n3: false,
    n4: false,
    n5: false,
    n6: false,
    n7: false,
    n8: false
}
var counter = 0;
const MAX_COUNT = 9;
// var playerArrX = [];
// var playerArrO = [];
// var grid;

// DOM References
var grid;
var playerScoreX;
var playerScoreO;
var button;
var currentPl = 'x';



// Event Listeners

document.addEventListener("DOMContentLoaded", function(e) {
    grid = document.getElementById('grid');
    playerScoreX = document.getElementById('playerx');
    playerScoreO = document.getElementById('playero');
    button = document.getElementById('reset');
    displayPlayer = document.getElementById('current')

    grid.addEventListener('click', function (e) {
        if (!filledSquares[e.target.id] && e.target.id !== 'grid') {
            e.target.classList.remove('empty');
            e.target.classList.add(currentPl + 'filled');
            filledSquares[e.target.id] = true;
            counter++;
            draw();
            checkWin();
            playerToggle();
        };
    });
    
    button.addEventListener('click', function (e) {
        reset();
        console.log('button pushed!');
    });
});

//Functions

function checkCondition(condition, player) {
    var conditionArr = document.getElementsByClassName(condition)
    for ( let i =0; i < conditionArr.length; i++) {
        if (!conditionArr[i].classList.contains(player + 'filled')) {
            return false
        };
        return player
    };
};

function checkWin() {
    if (
        checkCondition('row1', currentPl) || 
        checkCondition('row2', currentPl) ||
        checkCondition('row3', currentPl) ||
        checkCondition('col1', currentPl) ||
        checkCondition('col2', currentPl) ||
        checkCondition('col3', currentPl) ||
        checkCondition('diag1', currentPl) ||
        checkCondition('diag2', currentPl)
        ) {
            // gameOver(currentPl);
            console.log(currentPl + " wins")
    }
    return false
}    

function draw () {
    if (counter === MAX_COUNT) {
        console.log('its a draw');
    }   
}

// function gameOver(result) {
//     if (result === "draw") {
//         console.log("It's a draw!");
//     } else {
//         console.log(currentPl + " wins")
//     }
    
    
    
// }

function reset () {
    currentPl = 'x'
    for (let square in filledSquares) {
        filledSquares[square] = false;
    }
    playerArrO = 0;
    playerArrX = 0;
    counter = 0;
    displayPlayer.textContent = 'x';
}

function playerToggle () {
    if (currentPl === 'x') {
        currentPl = 'o';
    } else {
        currentPl = 'x';
    }
    displayPlayer.textContent = 'player: ' + currentPl;
}

