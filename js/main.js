window.addEventListener("load", (_) => {
    // const canvas = new Canvas2D(
    //     document.querySelector('.canvas-container'),
    //     {width: 300, height: 300}
    // );
    // canvas.drawCircle(75, 150, 50, '#2088c0');
    // canvas.drawCircle(125, 150, 50, '#2088c0');
    // canvas.drawCircle(175, 150, 50, '#2088c0');
    // canvas.drawCircle(225, 150, 50, '#2088c0');
    // canvas2D.drawArc(150, 150, 50,0,-2, '#ff0000');
    // canvas2D.drawLine(10, 10, 100, 100, '#0000ff');
    // canvas2D.drawTriangle(10, 10, 100, 10, 10, 100, '#ff0000');

    const canvas2 = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 500, height: 300}
    );
    // triangle
    canvas2.drawLine(25, 250, 85, 250);
    canvas2.drawLine(25, 250, 55, 200);
    canvas2.drawLine(55, 200, 85, 250);
    // square
    canvas2.drawLine(135, 250, 195, 250);
    canvas2.drawLine(135, 250, 135, 190);
    canvas2.drawLine(135, 190, 195, 190);
    canvas2.drawLine(195, 190, 195, 250);
    // octagon
    canvas2.drawLine(305, 165, 265, 165);
    canvas2.drawLine(325, 225, 325, 185);
    canvas2.drawLine(265, 245, 305, 245);
    canvas2.drawLine(245, 225, 245, 185);
    canvas2.drawLine(305, 165, 325, 185);
    canvas2.drawLine(325, 225, 305, 245);
    canvas2.drawLine(265, 245, 245, 225);
    canvas2.drawLine(245, 185, 265, 165);
});
