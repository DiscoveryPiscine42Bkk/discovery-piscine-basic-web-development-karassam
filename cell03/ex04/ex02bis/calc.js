function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

function calculate() {
  const left = $('#left').val();
  const right = $('#right').val();
  const op = $('#operator').val();

  if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
    alert('Error :(');
    return;
  }

  const a = parseInt(left, 10);
  const b = parseInt(right, 10);

  if ((op === '/' || op === '%') && b === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
    case '%': result = a % b; break;
    default: alert('Error :('); return;
  }

  alert('Result: ' + result);
  console.log('Result:', result);
}

$(document).ready(function () {
  $('#tryMe').on('click', calculate);

  setInterval(function () {
    alert('Please, use me...');
  }, 30000);
});
