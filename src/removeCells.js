function removeCells(canvas) {
  const cellsArray = Array.from(canvas.childNodes);
  cellsArray.forEach((element) => {
    canvas.removeChild(element);
  });
}

export default removeCells;