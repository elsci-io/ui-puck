window.addEventListener("load", (_) => {
    const canvas = new Canvas2D(
        document.querySelector('.canvas-container'),
        { width: 300, height: 300}
    );
    drawPuck([5,11], [1,5,4,3,6]);
    function drawPuck(array, array1){
        let currentCellNumber = 1
        const centerX = canvas.getCenter().x
        const centerY = canvas.getCenter().y
        const cellRad = 15
        const gap = 3 * array.length;
        const cellDiameter = cellRad * 2
        const rad = cellRad + (gap + cellDiameter * array.length) + 3;
        console.log(array.length)   
        canvas.drawCircle(centerX, centerY, rad)
        for (let rowNumber = 0; rowNumber < array.length; rowNumber++) {      
            for (let cellNumber = 0; cellNumber <  array[rowNumber]; cellNumber++) {
                const coords = _getCellCoords(rowNumber, array[rowNumber], cellNumber);
                let isFilled = false;

                for(let a = 0; a < array1.length; a++)   {
                    if (currentCellNumber == array1[a]){
                        isFilled = true;
                    break;
                    }
                }

                if (isFilled){
                    canvas.drawFilledCircle(coords.x, coords.y, coords.radius, '#21e9ff');
                } else {
                    canvas.drawCircle(coords.x, coords.y, coords.radius);
                }
                canvas.drawText(coords.x, coords.y, currentCellNumber);
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
        const rowRadius = cellRadius * 2 + 3 + (cellRadius * rowNumber * 2.2) ;
        const xCoords = centerX + Math.cos(_degreesToRadians(cellAngle - 90)) * rowRadius;
        const yCoords = centerY + Math.sin(_degreesToRadians(cellAngle - 90)) * rowRadius;
        return new PuckCellCoords(xCoords, yCoords, cellRadius)
    }
});