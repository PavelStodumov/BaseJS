'use strict'
function task_3() {
  let a = +prompt('введите первое число');
  let b = +prompt('введите второе число');
  
  if (a >= 0 && b >= 0) {
    alert('оба числа положительные. их разность: ' + (a - b))
  } else if (a < 0 && b < 0) {
    alert('оба числа отрицвтельные. их произведение: ' + (a * b))
  } else {
    alert('числа имеют разные знаки. их сумма: ' + (a + b))
  }
}

