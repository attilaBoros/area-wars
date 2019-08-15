function player1Collision() {
    let player1 = document.querySelector('player1');
    let redLine = [];
    if (document.querySelector('game-board').classList.length === 2) {
        redLine = document.querySelectorAll("[data-coordinate-x][data-coordinate-y]").classList.contains('red')
    }
    for (cell in redLine) {
        if (player1 === cell) {
            return true
        }
    }
}


function main() {
    document.querySelector('[data-coordinate-x="0"][data-coordinate-y="34"]').classList.add('player1');
    document.querySelector('[data-coordinate-x="129"][data-coordinate-y="34"]').classList.add('player2');
    //document.getElementById('game-board').addEventListener('keydown', movePlayer);

}

main();
