window.addEventListener("load", (_) => {
    const canvas = new Canvas2D(
        document.querySelector('.canvas-container'),
        { width: 300, height: 300 }
    );
    class PuckCellCoords {
        x;
        y;
        radius = 15;

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    const coords = PuckCellCoords(_getCellCoords.x, _getCellCoords.y);
    canvas.drawCircle()  
    function drawPuck(array, cellRadius, canvas) {
        const cells = _createPucks(array, cellRadius);
        _drawCells(cells);
        drawPuckCircle();



        let drawnCells = 0;
        for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
            const cellCount = array[rowIndex];
            _drawRow(rowIndex + 1, cellCount, cellRadius, canvas, drawnCells);
            drawnCells = drawnCells + cellCount;
        }
        const center = canvas.getCenter()
        const diameter = cellRadius * 2 + 3;
        canvas.drawCircle(center.x, center.y, array.length * diameter + cellRadius + 3)
    }
    function _createPucks(array, cellRadius) {
        const cellCoords = [];
        for(let r = 0; r < array.length; r++) {
            cellCoords.push(_getCellCoords())
        }
        return cellCoords;
    }

    function _drawRow(rowNumber, cellCount, cellRadius, canvas, drawnCells) {
        const center = canvas.getCenter()
        for (let cellNumber = 1; cellNumber <= cellCount; cellNumber++) {
            const cellAngle = _getCellAngle(cellCount, cellNumber)
            const cellCoords = _getCellCoords(cellAngle, rowNumber, cellRadius, center.x, center.y)
            canvas.drawCircle(cellCoords.x, cellCoords.y, cellRadius, );
            canvas.drawText(cellCoords.x, cellCoords.y,drawnCells + cellNumber);
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
        return {x: xCoords, y: yCoords};
    }

    function _getCellAngle(numberOfCells, cellNumber) {
        let angleStep = _calcCellAngleStep(numberOfCells);
        return angleStep * (cellNumber - 1);
    }
    
    drawPuck([5,11], 15, canvas);
});
