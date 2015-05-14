


window.onload = init;

function init(){
  var addButton = document.getElementById('add');

  addButton.addEventListener('click', addThemUp, false);
}

function addThemUp() {
  var num1 = Number(document.getElementById('number1').value);
  var num2 = Number(document.getElementById('number2').value);

  var total = add(num1, num2);

  printOnPage(total);
}

function add(number1, number2) {
  return number1 + number2;
}

function printOnPage(answer) {
  var element = document.getElementById('answer');

  element.innerHTML = answer;
}







