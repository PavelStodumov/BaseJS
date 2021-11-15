'use strict'

class Question {
  constructor(text, trueAnswer, answer1, answer2, answer3) {
    this.text = text;
    this.trueAnswer = {A: trueAnswer};
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
  }
  showQuestion() {
    console.log(this.text)
  }
  showVariants() {
    
  }
  
}


let question1 = new Question('Какой герой мультфильма живет в ананасе под водой?', 'Губка Боб Квадратные Штаны', 'Камбала', 'Немо', 'Рик и Морти');
let question2 = new Question('Как называются четыре Факультета Хогвартса?', 'Гриффиндор, Пуффендуй, Когтевран и Слизерин', 'Грифон, Ворон, Слон и Змея', 'Север, Восток, Запад и Юг', 'Красный, Синий, Зеленый и Оранжевый')

const questions = [question1, question2]