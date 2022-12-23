window.addEventListener("load", (_) => {
    const canvas = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );
    canvas.drawCircle(75, 150, 50, '#2088c0');
    canvas.drawCircle(125, 150, 50, '#2088c0');
    canvas.drawCircle(175, 150, 50, '#2088c0');
    canvas.drawCircle(225, 150, 50, '#2088c0');

    const canvas2 = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );
    // triangle
    canvas2.drawLine(25, 250, 85, 250);
    canvas2.drawLine(25, 250, 55, 200);
    canvas2.drawLine(55, 200, 85, 250);
    // square
    canvas2.drawLine(115, 250, 175, 250);
    canvas2.drawLine(115, 250, 115, 190);
    canvas2.drawLine(115, 190, 175, 190);
    canvas2.drawLine(175, 190, 175, 250);
    // octagon
    canvas2.drawLine(265, 165, 225, 165);
    canvas2.drawLine(285, 225, 285, 185);
    canvas2.drawLine(225, 245, 265, 245);
    canvas2.drawLine(205, 225, 205, 185);
    canvas2.drawLine(265, 165, 285, 185);
    canvas2.drawLine(285, 225, 265, 245);
    canvas2.drawLine(225, 245, 205, 225);
    canvas2.drawLine(205, 185, 225, 165);
    const canvas3 = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );

    let sectorAngle = Math.PI / 2;
    canvas3.drawArc(150, 150, 50, 0, sectorAngle, '#ff0000', false);
    canvas3.drawArc(150, 150, 50, sectorAngle, sectorAngle * 2, '#daff00', false);
    canvas3.drawArc(150, 150, 50, sectorAngle * 2, sectorAngle * 3, '#000dff', false);
    canvas3.drawArc(150, 150, 50, sectorAngle * 3, sectorAngle * 4, '#00ff37', false);

    const canvas4 = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );

    sectorAngle = Math.PI / 6;
    canvas4.drawArc(150, 150, 50, 0, sectorAngle, null, false);
    canvas4.drawArc(150, 150, 50, sectorAngle * 2, sectorAngle *3, null, false);
    canvas4.drawArc(150, 150, 50, sectorAngle * 4 , sectorAngle *5, null, false);
    canvas4.drawArc(150, 150, 50, sectorAngle * 6, sectorAngle *7, null, false);
    canvas4.drawArc(150, 150, 50, sectorAngle * 8, sectorAngle *9, null, false);
    canvas4.drawArc(150, 150, 50, sectorAngle * 10, sectorAngle *11, null, false);

    const canvas5 = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );
    drawFunctions(canvas5, 50, 300)
});

function degreesToRadians(degree) {
    return degree * Math.PI / 180;
}

function drawFunctions(canvas, angle, radius) {

    let rad = degreesToRadians(angle);
    let x = Math.cos(rad) * radius;
    let y = 300 - Math.sin(rad) * radius;
    // draw arc
    canvas.drawArc(0, 300, radius, 0, rad);
    canvas.drawLine(0, 300, x, 300, '#ff0000') // cos
    canvas.drawLine(0, 300, x, y, '#ff0000') // sin
    canvas.drawLine(x, y, x, 300, '#ff0000')

}