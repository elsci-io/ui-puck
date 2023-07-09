const selectedCellInexes = [0];
const array = [5, 11];
window.addEventListener("load", (_) => {
    const puckElement = document.querySelector('.puck');
    const drawPuck = new Puck(puckElement, array, selectedCellInexes)
    drawPuck.draw();
    drawPuck.onCellClick(onCellClick);
    drawPuck.onCellHover(onCellHover)
});
   

/**
 *
 * @param {number} cellIndex
 */
function onCellClick(cellIndex) {
    console.info('Clicked on: ' + cellIndex);
}

function onCellHover(cellIndex) {
    console.info('Mouse over: ' + cellIndex);
}