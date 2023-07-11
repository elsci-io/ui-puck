const selectedCellIndexes = [5];
window.addEventListener("load", (_) => {
    const redrawBtn = document.getElementById('Re-draw');
    redrawBtn.addEventListener("click", () => {
        drawPuck();
    });
    drawPuck();
});
function drawPuck() {
    const innerCircleValue = document.getElementById('inner-circle').value;
    const outerCircleValue = document.getElementById('outer-circle').value;
    const rowLengths = [parseInt(innerCircleValue), parseInt(outerCircleValue)];

    const puckElement = document.querySelector('.puck');
    puckElement.replaceChildren();
    const drawPuck = new Puck(puckElement, rowLengths, selectedCellIndexes)
    drawPuck.draw();
    drawPuck.onCellClick(onCellClick);
    drawPuck.onCellHover(onCellHover)
}
   

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