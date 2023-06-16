// let coordsArray = [];

// window.addEventListener("load", (_) => {
//     const puckElement = document.querySelector('.puck');
//     const canvasComponent = document.querySelector('.canvas-container');
//     const canvas = new Canvas2D(
//         canvasComponent,
//         { width: 300, height: 300 }
//     );
    // let filledCells = []
    // const puckDimensions = [5, 11]
    // const array = [5]
    // drawPuck(puckDimensions, filledCells)
    // function drawPuck(array, filledCellNums) {
    //     let currentCellNumber = 1
    //     const centerX = canvas.getCenter().x
    //     const centerY = canvas.getCenter().y
    //     const cellRad = 15
    //     const gap = 3 * array.length;
    //     const cellDiameter = cellRad * 2
    //     const rad = cellRad + (gap + cellDiameter * array.length) + 7;
    //     canvas.drawFilledCircle(centerX, centerY, rad, 'white')
    //     for (let rowNumber = 0; rowNumber < array.length; rowNumber++) {
    //         for (let cellNumber = 0; cellNumber < array[rowNumber]; cellNumber++) {
    //             const coords = _getCellCoords(rowNumber, array[rowNumber], cellNumber);
    //             const isFilled = filledCellNums.includes(currentCellNumber);
    //             let cellColor = 'white';
    //             if (isFilled) {
    //                 cellColor = '#21e9ff';
    //             }
    //             coordsArray.push(coords)
    //             canvas.drawFilledCircle(coords.x, coords.y, coords.radius, cellColor);
    //             canvas.drawText(coords.x, coords.y + 3, currentCellNumber);
    //             currentCellNumber = currentCellNumber + 1
    //         }
    //     }
    // }
    // function _degreesToRadians(degree) {
    //     return degree * Math.PI / 180;
    // }
    // function _calcCellAngleStep(numberOfCellsInRow) {
    //     return (360 / numberOfCellsInRow)
    // }

    // function _getCellCoords(rowNumber, numberOfCells, cellNumber) {
    //     const centerX = canvas.getCenter().x
    //     const centerY = canvas.getCenter().y
    //     const cellAngle = _calcCellAngleStep(numberOfCells) * cellNumber;
    //     const cellRadius = 15;
    //     const rowRadius = cellRadius * 2 + 3 + (cellRadius * rowNumber * 2.2);
    //     const xCoords = centerX + Math.cos(_degreesToRadians(cellAngle - 90)) * rowRadius;
    //     const yCoords = centerY + Math.sin(_degreesToRadians(cellAngle - 90)) * rowRadius;
    //     return new PuckCellCoords(xCoords, yCoords, cellRadius)
    // }
    // const buttonAll = document.getElementById("buttonAll");
    // buttonAll.addEventListener("click", () => {
    //     let counter = 1;
    //     for (let a = 0; a < puckDimensions.length; a++) {
    //         for (let i = 0; i < puckDimensions[a]; i++) {
    //             filledCells.push(counter);
    //             counter++;
    //         }
    //     }
    //     drawPuck(puckDimensions, filledCells)
    // })
    // const buttonClear = document.getElementById("buttonClear");
    // buttonClear.addEventListener("click", () => {
    //     clearPuck();
    //     function clearPuck() {
    //         filledCells = [];
    //         drawPuck(puckDimensions, filledCells);
    //     }
    // })
    // canvasComponent.addEventListener("click", (event) => {
    //     const x = event.offsetX;
    //     const y = event.offsetY;
    //     for (let a = 0; a < coordsArray.length; a++) {
    //         let cellCoordX = coordsArray[a].x;
    //         let cellCoordY = coordsArray[a].y
    //         const firstLeg = Math.pow(y - cellCoordY, 2);
    //         const secondLeg = Math.pow(x - cellCoordX, 2);
    //         const distance = Math.sqrt(firstLeg + secondLeg);
    //         if (15 >= distance) {
    //             if (filledCells.includes(a + 1)) {
    //                 const index = filledCells.indexOf(a + 1);
    //                 filledCells.splice(index, 1)
    //             } else {
    //                 filledCells.push(a + 1)
    //             }
    //             drawPuck(puckDimensions, filledCells);
    //             return;
    //         }
    //     }

    // });
    // drawButtonPuck([5,11])
    // function drawButtonPuck (array){
    //     let currentCellNumber = 1
    //     for (let rowNumber = 0; rowNumber < array.length; rowNumber++) {
    //         for (let cellNumber = 0; cellNumber < array[rowNumber]; cellNumber++) {
    //             const coords = _getCellCoords(rowNumber, array[rowNumber], cellNumber);
    //             //create button with coords: coords.x, coords.y;
    //             puckElement.insertAdjacentHTML('beforeend', '<button class = "puck__cell">'+(currentCellNumber)+'</button>');
    //             const lastElement = puckElement.lastElementChild;
    //             lastElement.addEventListener("click",(event) =>{
    //                 const target = event.target;
    //                 target.classList.toggle('puck__cell--selected')

    //             });
    //             lastElement.style.left=coords.x -15 + 'px'; // or can be bottom
    //             lastElement.style.top=coords.y -15+ 'px'; // or can be right
    //             coordsArray.push(coords)
    //             currentCellNumber++;
    //         }
    //     }
    // }
// });
