'use strict'
function task_1(){
  //пример1
  let a = 1, b = 1, c, d;
  c = ++a;
  alert(c); //ответ 2
  // инкремент увеличивает переменную на 1, затем присваивается значение в переменную с
  
  //пример 2
  d = b++;
  alert(d); //ответ 1
  // в переменную d присваивается значение b, затем значение b увеличивается на 1
  
  //пример 3
  c = 2 + ++a;
  alert(c); // ответ 5
  // переменная а после первого примера равна 2, затем инкрементом её увеличили на 1, затем прибавили 2, затем присвоили в с.
  
  //пример 4
  d = 2 + b++;
  alert(d); //ответ 4
  // во втором примере b стала 2. d = 2 + b = 4
  
  alert(a); //ответ 3
  // в третем примере а стала равна 3
  alert(b); //oтвет 3
  // в четвертом примере b стала равна 3
}
