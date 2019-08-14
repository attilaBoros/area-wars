function main() {
    document.querySelector('[data-coordinate-x="0"][data-coordinate-y="34"]').classList.add('player1');
    document.querySelector('[data-coordinate-x="129"][data-coordinate-y="34"]').classList.add('player2');
    document.getElementById('game-board').addEventListener('keydown', movePlayer);










    function getAreaCells(area) {
        return document.getElementsByClassName(area);
    }

    function checkGameOver(player, playerArea, opponentArea) {
        let boardSize = getAreaCells('game-board');
        let playerAreaCells = getAreaCells(playerArea);
        let opponentAreaCells = getAreaCells(opponentArea);
        if (playerAreaCells.length > boardSize.length/2) {
            return true
        }
        for (cell of opponentAreaCells) {
            if (player == cell) {
                return true
            }
        }
    }
}

main();