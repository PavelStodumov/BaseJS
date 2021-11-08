'use strict'
function task_1(){
  //пример1
  let a = 1, b = 1, c, d;
  c = ++a;
  alert(`c = ${c} инкремент увеличивает переменную на 1, затем присваивается значение в переменную с`)
  
  //пример 2
  d = b++;
  alert(`d = ${d} в переменную d присваивается значение b, затем значение b увеличивается на 1`);
  
  //пример 3
  c = 2 + ++a;
  alert(`c = ${c} переменная а после первого примера равна 2, затем инкрементом её увеличили на 1, затем прибавили 2, затем присвоили в с.`);
  
  //пример 4
  d = 2 + b++;
  alert(`d = ${d} во втором примере b стала 2. d = 2 + b = 4`);
  
  alert(`a = ${a} в третем примере а стала равна 3`);
  alert(`b = ${b} в четвертом примере b стала равна 3`)
}

function task_4() {
  function getSum(a, b) {
    alert('сумма равна: ' + (a + b))
    return a + b
  }
  function getDifferense(a, b) {
    alert('разность равна: ' + (a - b))
    return a - b
  }
  function getMultiplication(a, b) {
    alert('произведение равно: ' + (a * b))
    return a * b
  }
  function getDivison(a, b) {
    alert('частное равно: ' + (a / b))
    return a / b
  }
  function calc(operation=prompt('Введи операцию(+, -, *, /):')) {
    if (operation == '+') {
      getSum(+prompt('введи первое число'), +prompt('введи второе число'))
    } else if (operation == '-') {
      getDifferense(+prompt('введи первое число'), +prompt('введи второе число'))
    } else if (operation == '*') {
      getMultiplication(+prompt('введи первый множитель'), +prompt('введи второй множитель'))
    } else if (operation == '/') {
      getDivison(+prompt('введи делимое'), +prompt('введи делитель'))
    } else {
      alert('неизвестная операция')
    }
  }
  calc()
}

function task_5() {
  function calc_v2(num1, num2, operation=prompt('введи операцию(+, -, *, /)')) {
    num1 = +prompt('введи первое число');
    num2 = +prompt('введи второе число');
    switch (operation) {
      case '+':
        getSum(num1, num2)
        break
      case '-':
        getDifferense(num1, num2)
        break
      case '*':
        getMultiplication(num1, num2)
        break
      case '/':
        getDivison(num1, num2)
        break
      default:
        alert('неизвестная операция')
    }
  }
  calc_v2()
}