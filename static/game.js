const w = 87;
const s = 83;
const a = 65;
const d = 68;
const up = 38;
const down = 40;
const left = 37;
const right = 39;

let direction1 = 'right';
let direction2 = 'left';

let set1 = setInterval(movePlayer1_, 45);
let set2 = setInterval(movePlayer2_,45);

function setDirectionPlayer1(event) {
    console.log(event.keyCode);
    if (event.keyCode === w && direction1 !== 'down') {
        direction1 = 'up';
    } else if (event.keyCode === s && direction1 !== 'up') {
        direction1 = 'down';
    } else if (event.keyCode === a && direction1 !== 'right') {
        direction1 = 'left';
    } else if (event.keyCode === d && direction1 !== 'left') {

        direction1 = 'right';
    }

}
function setDirectionPlayer2(event) {
    if (event.keyCode === up && direction1 !== 'down') {
        direction2 = 'up';
    } else if (event.keyCode === down  && direction2 !== 'up') {
        direction2 = 'down';
    } else if (event.keyCode === left  && direction2 !== 'right') {
        direction2 = 'left';
    } else if (event.keyCode === right && direction2 !== 'left') {
        direction2 = 'right'
    }

}
function movePlayer1_() {
    let player1 = document.querySelector(`.player1`);
    let x = player1.dataset.coordinateX;
    let y = player1.dataset.coordinateY;
    if (player1Collision() && player2Collision() && player1HitWall() && player2HitWall()) {
        if (direction1 === 'right') {
            player1.classList.add('red');
            player1.classList.remove('player1');
            document.querySelector(`[data-coordinate-x="${parseInt(x) + 1}"][data-coordinate-y="${y}"]`).classList.add('player1');
        } else if (direction1 === 'left') {
            player1.classList.add('red');
            player1.classList.remove('player1');
            document.querySelector(`[data-coordinate-x="${parseInt(x) - 1}"][data-coordinate-y="${y}"]`).classList.add('player1');
        } else if (direction1 === 'up') {
            player1.classList.add('red');
            player1.classList.remove('player1');
            document.querySelector(`[data-coordinate-x="${x}"][data-coordinate-y="${parseInt(y) - 1}"]`).classList.add('player1');
        } else if (direction1 === 'down') {
            player1.classList.add('red');
            player1.classList.remove('player1');
            document.querySelector(`[data-coordinate-x="${x}"][data-coordinate-y="${parseInt(y) + 1}"]`).classList.add('player1');
        }
    } else {
        clearInterval(set1);
        clearInterval(set2);
        if (player1Collision() && player1HitWall()){
            gameOver('Red');
        } else {
            gameOver('Blue');
        }
    }
}
function movePlayer2_() {
    let player2 = document.querySelector(`.player2`);
    let x = player2.dataset.coordinateX;
    let y = player2.dataset.coordinateY;
    if (player1Collision() && player2Collision() && player1HitWall() && player2HitWall()) {
        if (direction2 === 'right') {
            player2.classList.add('blue');
            player2.classList.remove('player2');
            document.querySelector(`[data-coordinate-x="${parseInt(x) + 1}"][data-coordinate-y="${y}"]`).classList.add('player2');
        } else if (direction2 === 'left') {
            player2.classList.add('blue');
            player2.classList.remove('player2');
            document.querySelector(`[data-coordinate-x="${parseInt(x) - 1}"][data-coordinate-y="${y}"]`).classList.add('player2');
        } else if (direction2 === 'up') {
            player2.classList.add('blue');
            player2.classList.remove('player2');
            document.querySelector(`[data-coordinate-x="${x}"][data-coordinate-y="${parseInt(y) - 1}"]`).classList.add('player2');
        } else if (direction2 === 'down') {
            player2.classList.add('blue');
            player2.classList.remove('player2');
            document.querySelector(`[data-coordinate-x="${x}"][data-coordinate-y="${parseInt(y) + 1}"]`).classList.add('player2');
        }
    } else {

        clearInterval(set1);
        clearInterval(set2);
        if (player1Collision() && player1HitWall()){
            gameOver('Red');
        } else {
            gameOver('Blue');
        }

    }


}
function player1HitWall() {
    let player1 = document.querySelector('.player1');
    return !(player1.dataset.coordinateX === '0' || player1.dataset.coordinateX === '129' ||
        player1.dataset.coordinateY === '0' || player1.dataset.coordinateY === '69');


}
function player2HitWall() {
    let player2 = document.querySelector('.player2');
    return !(player2.dataset.coordinateX === '0' || player2.dataset.coordinateX === '129' ||
        player2.dataset.coordinateY === '0' || player2.dataset.coordinateY === '69');


}
function player1Collision() {
    let player1 = document.querySelector('.player1');
    return !player1.classList.contains('blue') && !player1.classList.contains('red');


}
function player2Collision() {
    let player2 = document.querySelector('.player2');
    return !player2.classList.contains('red') && !player2.classList.contains('blue');


}

function gameOver(player) {
    let wrapper = document.querySelector('.wrapper');
    wrapper.removeChild(document.querySelector('.game-board'));
    let h1 = document.createElement('h1');
    h1.textContent = `${player} Wins!!!!!!`;
    wrapper.appendChild(h1);
}

function main() {
    document.querySelector('[data-coordinate-x="1"][data-coordinate-y="34"]').classList.add('player1');
    document.querySelector('[data-coordinate-x="128"][data-coordinate-y="34"]').classList.add('player2');
    window.addEventListener('keydown', setDirectionPlayer1);
    window.addEventListener('keydown', setDirectionPlayer2);
}



main();