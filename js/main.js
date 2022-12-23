window.addEventListener("load", (_) => {
    const canvas2D = new Canvas2D(
        document.querySelector('.canvas-container'),
        {width: 300, height: 300}
    );
    canvas2D.drawCircle(150, 150, 50, '#00ff00');
    canvas2D.drawArc(150, 150, 50,0,-Math.PI/2, '#ff0000');
    canvas2D.drawLine(10, 10, 100, 100, '#0000ff');
    canvas2D.drawTriangle(10, 10, 100, 10, 10, 100, '#ff0000');
});
