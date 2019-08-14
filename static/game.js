function main() {

    document.getElementById('game-board').addEventListener('keydown', movePlayer);
        function movePlayer() {

        }









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