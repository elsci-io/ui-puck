import PuckCellCoords from "./PuckCellCoords.js";
export const CLASS_DISABLED = 'puck__cell--disabled';
export const STATUS_CLASS_NAMES = new Map(
    [['DIFFRACTED', 'puck__cell--status-success'],['DIFFRACTION_FAILED', 'puck__cell--status-failed'],['HARVESTED', 'puck__cell--no-status'], ]
);

export default class Puck {
    #puckElement;
    #cellElements = [];

    /** @type {[PuckCell]} */
    #puckCells = [];
    #rowLengths;
    #selectedCellIndexes;
    #onCellClickCb = [];
    #onCellHoverCb = [];

    constructor(puckElement,rowLengths, selectedCellIndexes){
        this.#puckElement = puckElement;
        this.#rowLengths = rowLengths;
        this.#selectedCellIndexes = selectedCellIndexes;
    }
    addCell(cellIdx, puckCell){
        this.#puckCells[cellIdx] = puckCell;
        const cellElement = this.#cellElements[cellIdx];
        if(!puckCell.disabled)
            cellElement.classList.remove(CLASS_DISABLED)
        cellElement.classList.add(puckCell.cssClass);
        cellElement.disabled = puckCell.disabled;
        this.updateCellStatus(cellIdx, puckCell);
    }
    updateCellStatus(cellIndex, puckCell){
        const cellElement = this.#cellElements[cellIndex];
        cellElement.classList.remove([...STATUS_CLASS_NAMES.values()]);
        cellElement.classList.add(STATUS_CLASS_NAMES.get(puckCell.status));
    }
    draw() {
        let currentCellNumber = 1;
        this.#drawPuckCircle();
        const center = this.#getPuckCenter();
        for (let rowNumber = 0; rowNumber < this.#rowLengths.length; rowNumber++) {
            for (let cellNumber = this.#rowLengths[rowNumber]; cellNumber >= 1; cellNumber--) {
                // by default if it's empty, then it's disabled, then if someone fills the cell, it becomes enabled
                this.#puckElement.insertAdjacentHTML('beforeend',
                    `<button class = "puck__cell ${CLASS_DISABLED}">${currentCellNumber}</button>`);
                const lastElement = this.#puckElement.lastElementChild;
                lastElement.disabled = true;

                this.#cellElements.push(lastElement);
                if(this.#selectedCellIndexes.includes(currentCellNumber)){
                    lastElement.classList.toggle('puck__cell--selected');
                }
                lastElement.addEventListener("mouseover", (event) => {
                    this.#callCallbacks(this.#onCellHoverCb, event);
                });
                lastElement.addEventListener("click", (event) => {
                    const selectedCellButton = document.querySelector('.puck__cell--selected');
                    if (selectedCellButton) {
                        selectedCellButton.classList.remove('puck__cell--selected')
                    }
                    event.target.classList.add('puck__cell--selected');
                    this.#callCallbacks(this.#onCellClickCb, event);
                });
                const coords = this.#getCellCoords(rowNumber, this.#rowLengths[rowNumber], cellNumber, center);
                lastElement.style.left = coords.x - 15 + 'px'; // or can be bottom
                lastElement.style.top = coords.y - 15 + 'px'; // or can be right
                currentCellNumber++;
            }
        }
    }
    onCellHover(cb) {
        this.#onCellHoverCb.push(cb);
    }
    onCellClick(cb) {
        this.#onCellClickCb.push(cb);
    }

    #callCallbacks(callbacks, event) {
        const cellIdx = parseInt(event.target.textContent) - 1;
        for (const cb of callbacks) {
            const puckCell = this.#puckCells[cellIdx];
            cb(cellIdx, puckCell);
        }
    }
    #degreesToRadians(degree) {
        return degree * Math.PI / 180;
    }
    #calcCellAngleStep(numberOfCellsInRow) {
        return (360 / numberOfCellsInRow)
    }
    #getCellCoords(rowNumber, numberOfCells, cellNumber, center) {
        const cellAngle = this.#calcCellAngleStep(numberOfCells) * cellNumber;
        const cellRadius = 15;
        const rowRadius = cellRadius * 2 + 3 + (cellRadius * rowNumber * 2.2);
        const xCoords = center.x + Math.cos(this.#degreesToRadians(cellAngle - 90)) * rowRadius;
        const yCoords = center.y + Math.sin(this.#degreesToRadians(cellAngle - 90)) * rowRadius;
        return new PuckCellCoords(xCoords, yCoords, cellRadius)
    }
    #getPuckCenter(){
        const rect = this.#puckElement.getBoundingClientRect();
        return {x: rect.width / 2, y: rect.height / 2}
    }
    #drawPuckCircle(){
        const diameter = this.#rowLengths.length* 60+30+(6*this.#rowLengths.length)+5;
        const size = diameter + "px"
        this.#puckElement.style.width = size;
        this.#puckElement.style.height = size;
    }
}