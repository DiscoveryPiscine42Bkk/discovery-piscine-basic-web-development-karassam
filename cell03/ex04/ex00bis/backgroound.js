function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let currentScale = 1;

$(document).ready(function () {
  $('#colorBtn').on('click', function () {
    $('body').css('background-color', getRandomColor());

    currentScale *= 1.2;
    $(this).css('transform', `scale(${currentScale})`);
  });
});
