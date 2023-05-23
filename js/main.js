let coordsArray = [];

window.addEventListener("load", (_) => {
    const canvasComponent = document.querySelector('.canvas-container');
    const canvas = new Canvas2D(
        canvasComponent,
        { width: 300, height: 300 }
    );
    let filledCells = []  
    const puckDimensions = [5,11]
    const array = [5]
    drawPuck(puckDimensions,filledCells)
    function drawPuck(array, filledCellNums) {
        canvas.clear()
        let currentCellNumber = 1
        const centerX = canvas.getCenter().x
        const centerY = canvas.getCenter().y
        const cellRad = 15
        const gap = 3 * array.length;
        const cellDiameter = cellRad * 2
        const rad = cellRad + (gap + cellDiameter * array.length) + 7;
        canvas.drawFilledCircle(centerX, centerY, rad, 'white')
        for (let rowNumber = 0; rowNumber < array.length; rowNumber++) {
            for (let cellNumber = 0; cellNumber < array[rowNumber]; cellNumber++) {
                const coords = _getCellCoords(rowNumber, array[rowNumber], cellNumber);
                const isFilled = filledCellNums.includes(currentCellNumber);
                let cellColor = 'white';
                if (isFilled) {
                    cellColor = '#21e9ff';
                }
                coordsArray.push(coords)
                canvas.drawFilledCircle(coords.x, coords.y, coords.radius, cellColor);
                canvas.drawText(coords.x, coords.y + 3, currentCellNumber);
                currentCellNumber = currentCellNumber + 1
            }
        }
    }
    function _degreesToRadians(degree) {
        return degree * Math.PI / 180;
    }
    function _calcCellAngleStep(numberOfCells) {

        return (360 / numberOfCells)
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
    const button = document.getElementById("buttonClear");
    button.addEventListener("click", ()=> {
        clearPuck()
        function clearPuck(){
            filledCells=[];
            drawPuck(puckDimensions, filledCells)
        }
    })
    canvasComponent.addEventListener("click", (event) => {
        function cellCoords(coordX, coordY) {
            const endX = coordX + 15;
            const startX = coordX - 15;
            const startY = coordY - 15;
            const endY = coordY + 15;
            return { endX: endX, startX: startX, startY: startY, endY: endY }
        }
        const x = event.offsetX;
        const y = event.offsetY;
        for (let a = 0; a < coordsArray.length; a++) {
            let coordX = coordsArray[a].x;
            let coordY = coordsArray[a].y
            let coord = cellCoords(coordX, coordY);
            if (x < coord.endX && x > coord.startX && y < coord.endY && y > coord.startY) {
                if(filledCells.includes(a+1)){
                    const index = filledCells.indexOf(a+1);
                    filledCells.splice(index,1)
                }else{
                    filledCells.push(a+1)
                }
                drawPuck(puckDimensions, filledCells);
                return;
            }
        }
       
    });

});
