window.addEventListener("load", (_) => {
    const puckElement = document.querySelector('.puck');
    const canvasComponent = document.querySelector('.puck');
    const canvas = new Canvas2D(
        canvasComponent,
        { width: 300, height: 300 }
    );
    function _degreesToRadians(degree) {
        return degree * Math.PI / 180;
    }
    function _calcCellAngleStep(numberOfCellsInRow) {
        return (360 / numberOfCellsInRow)
    }
    function _getCellCoords(rowNumber, numberOfCells, cellNumber) {
        const centerX = canvas.getCenter().x
        const centerY = canvas.getCenter().y
        const cellAngle = _calcCellAngleStep(numberOfCells) * cellNumber;
        const cellRadius = 15;
        const rowRadius = cellRadius * 2 + 3 + (cellRadius * rowNumber * 2.2);
        const xCoords = centerX + Math.cos(_degreesToRadians(cellAngle - 90)) * rowRadius;
        const yCoords = centerY + Math.sin(_degreesToRadians(cellAngle - 90)) * rowRadius;
        return new PuckCellCoords(xCoords, yCoords, cellRadius)
    }
drawButtonPuck([5,11])
    function drawButtonPuck (array){
        let currentCellNumber = 1
        for (let rowNumber = 0; rowNumber < array.length; rowNumber++) {
            for (let cellNumber = 0; cellNumber < array[rowNumber]; cellNumber++) {
                const coords = _getCellCoords(rowNumber, array[rowNumber], cellNumber);
                //create button with coords: coords.x, coords.y;
                puckElement.insertAdjacentHTML('beforeend', '<button class = "puck__cell">'+(currentCellNumber)+'</button>');
                const lastElement = puckElement.lastElementChild;
                lastElement.addEventListener("click",(event) =>{
                    const target = event.target;
                    target.classList.toggle('puck__cell--selected')

                });
                lastElement.style.left=coords.x -15 + 'px'; // or can be bottom
                lastElement.style.top=coords.y -15+ 'px'; // or can be right
                currentCellNumber++;
            }
        }
    }
});