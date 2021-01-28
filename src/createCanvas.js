function createCanvas (canvas, cellSize, canvasSize) {
  for (let i = 1; i <= (canvasSize / cellSize) * (canvasSize / cellSize); ++i) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    canvas.appendChild(cell);
  }
}

export default createCanvas;