const selectedCellIndexes = [];
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
    drawPuck.addCell(0 , new PuckCell(false, 'puck__cell--status-success', '1',null));
    drawPuck.addCell(1 , new PuckCell(false, 'puck__cell--status-success', '2',null));
    drawPuck.addCell(2, new PuckCell(false, 'puck__cell--status-success', '3',null))
    drawPuck.addCell(3, new PuckCell(false, 'puck__cell--status-success', '4',null))
    drawPuck.addCell(4, new PuckCell(false, 'puck__cell--status-failed', '5',null))
    drawPuck.addCell(5, new PuckCell(false, 'puck__cell--status-success', '6',null));
    drawPuck.addCell(6 , new PuckCell(false, 'puck__cell--status-success', '7',null));
    drawPuck.addCell(7 , new PuckCell(false, 'puck__cell--status-success', '8',null));
    drawPuck.addCell(8, new PuckCell(false, 'puck__cell--status-failed', '9',null));
    drawPuck.addCell(9, new PuckCell(false, 'puck__cell--no-status', '10',null))
    drawPuck.addCell(10, new PuckCell(false, 'puck__cell--no-status', '11',null))
    drawPuck.onCellClick(onCellClick);
    drawPuck.onCellHover(onCellHover)
}
   

/**
 *
 * @param {number} cellIndex
 * @param {PuckCell | null} cellIndex
 */
function onCellClick(cellIndex, puckCell) {
    console.info('Clicked on: ' + cellIndex, puckCell);
}

function onCellHover(cellIndex, puckCell) {
    console.info('Mouse over: ' + cellIndex, puckCell);
}