function resetCells(canvas) {
  const cellsArray = Array.from(canvas.childNodes);
  cellsArray.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
}

export default resetCells;