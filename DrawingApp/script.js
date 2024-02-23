const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let x, y;

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchmove', draw);

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  console.log(x, y, isPressed);
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function startDrawing(e) {
  isPressed = true;
  [x, y] = getPosition(e);
}

function stopDrawing() {
  isPressed = false;
  x = undefined;
  y = undefined;
}

function draw(e) {
  if (isPressed) {
    const [newX, newY] = getPosition(e);
    drawCircle(newX, newY);
    drawLine(x, y, newX, newY);
    x = newX;
    y = newY;
  }
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function getPosition(e) {
  if (e.touches) {
    const rect = canvas.getBoundingClientRect();
    return [e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top];
  } else {
    return [e.offsetX, e.offsetY];
  }
}

function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

increaseBtn.addEventListener('click', () => {
  size += 5;
  if (size > 50) size = 50;
  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;
  if (size < 5) size = 5;
  updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => (color = e.target.value));

clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
