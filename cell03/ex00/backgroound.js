function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const button = document.getElementById("colorBtn");
let currentScale = 1;

function changeBackground() {
  document.body.style.backgroundColor = getRandomColor();

  currentScale *= 1.2;
  button.style.transform = `scale(${currentScale})`;
}

button.onclick = changeBackground;
