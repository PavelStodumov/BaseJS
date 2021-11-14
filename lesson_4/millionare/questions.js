'use strict'

class Question {
  constructor(text, answer, variants) {
    this.text = text;
    this.answer = answer;
    this.variants = variants.push(answer);
  }
}


let question1 = new Question('Какой герой мультфильма живет в ананасе под водой?', 'Губка Боб Квадратные Штаны', ['Камбала', 'Немо', 'Рик и Морти']);
let question2 = new Question('Как называются четыре Факультета Хогвартса?', 'Гриффиндор, Пуффендуй, Когтевран и Слизерин', ['Грифон, Ворон, Слон и Змея', 'Север, Восток, Запад и Юг', 'Красный, Синий, Зеленый и Оранжевый'])

const questions = [question1, question2]