import createCanvas from './src/createCanvas.js';
import removeCells from './src/removeCells.js';
import resetCells from './src/resetCells.js';

const canvas = document.querySelector('main');
const resizeBtn = document.getElementById('size-btn');
const resetBtn = document.getElementById('reset-btn');


const canvasSize = 600;
let cellNumber = 16;

window.addEventListener('load', () => {
    removeCells(canvas);
    createCanvas(canvas, canvasSize / cellNumber, canvasSize);
    resetCells(canvas);
})

resetBtn.addEventListener('click', () => {
  resetCells(canvas);
})

canvas.addEventListener('mouseover', (event) => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  event.target.style.backgroundColor = `rgb(${R},${G},${B})`;
});

resizeBtn.addEventListener('click', () => {
  cellNumber = prompt('Enter the size of the grid: [1-50]');
  if (cellNumber < 1 || cellNumber > 50) return alert('Please enter a number between 1-50.')
  if (cellNumber !== null && (isNaN(cellNumber) === false &&
      cellNumber[0] !== '+' && cellNumber[0] !== '-')) {
    removeCells(canvas);
    createCanvas(canvas, canvasSize / cellNumber, canvasSize);
    resetCells(canvas);
  }
})