$(document).ready(function () {
  const $balloon = $('#balloon');

  let size = 200;
  const minSize = 200;
  const maxSize = 420;

  const colors = ['red', 'green', 'blue'];
  let colorIndex = 0;

  function setBalloonSizeAndColor() {
    $balloon.css({
      width: size + 'px',
      height: size + 'px',
      backgroundColor: colors[colorIndex]
    });
  }

  $balloon.on('click', function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size > maxSize) {
      size = minSize;
      colorIndex = 0;
    }

    setBalloonSizeAndColor();
  });

  $balloon.on('mouseleave', function () {
    size -= 5;
    if (size < minSize) size = minSize;

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    setBalloonSizeAndColor();
  });

  setBalloonSizeAndColor();
});
