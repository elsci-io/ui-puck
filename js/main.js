window.addEventListener("load", (_) => {
    // const canvas = new Canvas2D(
    //     document.querySelector('.canvas-container'),
    //     {width: 300, height: 300}
    // );
    // canvas.drawCircle(75, 150, 50, '#2088c0');
    // canvas.drawCircle(125, 150, 50, '#2088c0');
    // canvas.drawCircle(175, 150, 50, '#2088c0');
    // canvas.drawCircle(225, 150, 50, '#2088c0');

    // const canvas2 = new Canvas2D(
    //     document.querySelector('.canvas-container'),
    //     {width: 500, height: 300}
    // );
    // // triangle
    // canvas2.drawLine(25, 250, 85, 250);
    // canvas2.drawLine(25, 250, 55, 200);
    // canvas2.drawLine(55, 200, 85, 250);
    // // square
    // canvas2.drawLine(135, 250, 195, 250);
    // canvas2.drawLine(135, 250, 135, 190);
    // canvas2.drawLine(135, 190, 195, 190);
    // canvas2.drawLine(195, 190, 195, 250);
    // // octagon
    // canvas2.drawLine(305, 165, 265, 165);
    // canvas2.drawLine(325, 225, 325, 185);
    // canvas2.drawLine(265, 245, 305, 245);
    // canvas2.drawLine(245, 225, 245, 185);
    // canvas2.drawLine(305, 165, 325, 185);
    // canvas2.drawLine(325, 225, 305, 245);
    // canvas2.drawLine(265, 245, 245, 225);
    // canvas2.drawLine(245, 185, 265, 165);
    const canvas3 = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );

    const sectorAngle = Math.PI /2;
    canvas3.drawArc(150, 150, 50, 0, sectorAngle, '#ff0000', false);
    canvas3.drawArc(150, 150, 50, sectorAngle, sectorAngle*2, '#daff00', false);
    canvas3.drawArc(150, 150, 50, sectorAngle * 2, sectorAngle *3 , '#000dff', false);
    canvas3.drawArc(150, 150, 50, sectorAngle * 3, sectorAngle * 4, '#00ff37', false);
});
