window.addEventListener("load", (_) => {
    const canvas = new Canvas2D(
        document.querySelector('.canvas-container'),
        { width: 300, height: 300 }
    );
    
    function drawPuck(array, cellRadius, canvas) {
        for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
            let drawnCells = 0-array[rowIndex]
            const cells = array[rowIndex];
            drawnCells = drawnCells + array[rowIndex];
            if (rowIndex>0){
                drawnCells = drawnCells + array[0]
            } else{
                drawnCells = 0
            }
            _drawRow(rowIndex + 1, cells, cellRadius, canvas, drawnCells);
        }
        const diameter = cellRadius * 2 + 3;
        const center = canvas.getCenter()
        canvas.drawCircle(center.x, center.y, array.length * diameter + cellRadius + 3)
    }
    function _drawRow(rowNumber, cells, cellRadius, canvas, drawnCells) {
        const center = canvas.getCenter()
        for (let cellNumber = 1; cellNumber <= cells; cellNumber++) {
            const cellAngle = _getCellAngle(cells, cellNumber)
            const cellCoords = _getCellCoords(cellAngle, rowNumber, cellRadius, center.x, center.y)
            canvas.drawCircle(cellCoords.x, cellCoords.y, cellRadius);
            canvas.drawText(cellCoords.x, cellCoords.y,drawnCells+cellNumber);
        }
    }
    function _degreesToRadians(degree) {
        return degree * Math.PI / 180;
    }
    
    function _calcCellAngleStep(numberOfCells) {
        return (360 / numberOfCells)
    }

    function _getCellCoords(cellAngle, rowNumber, cellRadius, centerX, centerY) {
        const diameter = cellRadius * 2 + 3;
        const xCoords = centerX + Math.cos(_degreesToRadians(cellAngle - 90)) * diameter * rowNumber;
        const yCoords = centerY + Math.sin(_degreesToRadians(cellAngle - 90)) * diameter * rowNumber;
        return { x: xCoords, y: yCoords };
    }

    function _getCellAngle(numberOfCells, cellNumber) {
        let angleStep = _calcCellAngleStep(numberOfCells);
        return angleStep * (cellNumber - 1);
    }
    
    drawPuck([5, 11], 15, canvas);
});
