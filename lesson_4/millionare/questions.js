'use strict'
/**
 * возвращает случайное число в диапазоне [min:max)
 * @param {начальное значение} min 
 * @param {конечное значение} max 
 * @returns целое число
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
/**
 * @генератор
 * @returns случайная буква от A до D без повторов
 */
function* genLetter() {
  let letters = ['A', 'B', 'C', 'D']
  yield letters.splice(getRandomArbitrary(0, letters.length), 1).join('')
  yield letters.splice(getRandomArbitrary(0, letters.length), 1).join('')
  yield letters.splice(getRandomArbitrary(0, letters.length), 1).join('')
  yield letters.splice(getRandomArbitrary(0, letters.length), 1).join('')
}

class Question {
  constructor(text, trueAnswer, answer1, answer2, answer3) {
    this.text = text;
    this.trueAnswer = trueAnswer;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    let gen = genLetter()
    this.answers = [
      [gen.next().value, this.trueAnswer],
      [gen.next().value, this.answer1],
      [gen.next().value, this.answer2],
      [gen.next().value, this.answer3]
    ]
  }


  showQuestion() {
    console.log(`${'>'.repeat(10)}Внимание, вопрос${'<'.repeat(10)}`)
    console.log(this.text)
  }
  showVariants() {
    this.answers.sort()
    console.log(`${'-'.repeat(10)}Варианты ответов${'-'.repeat(10)}`)
    for (let i of this.answers) {
      console.log(`${i[0]}: ${i[1]}`)
    }
  }
  checkAnswer(letter) {
    if (letter == null) {
      return false
    }
    for (let i of this.answers) {
      if (i.includes(letter) && i[1] == this.trueAnswer) {
        console.log(`${'#'.repeat(10)} Правильный ответ ${'#'.repeat(10)}`)
        player.addPoints()
        return true
      }
    }
    console.log(`${'_'.repeat(10)}не правильный ответ${'_'.repeat(10)}`)
    return true
  }

}


let question1 = new Question('Какой герой мультфильма живет в ананасе под водой?', 'Губка Боб Квадратные Штаны', 'Камбала', 'Немо', 'Рик и Морти');
let question2 = new Question('Как называются четыре Факультета Хогвартса?', 'Гриффиндор, Пуффендуй, Когтевран и Слизерин', 'Грифон, Ворон, Слон и Змея', 'Север, Восток, Запад и Юг', 'Красный, Синий, Зеленый и Оранжевый')
let question3 = new Question('Как называется колокол часов Вестминстерского дворца в Лондоне?', 'Биг Бен', 'Броненосец', 'Калабаш', 'Мумия')
let question4 = new Question('Из чего сделан самый крепкий дом в “Трех поросятах”?', 'Кирпич', 'Палочки', 'Солома', 'Бамбук')
let question5 = new Question('Какие животные воспитывали Маугли в “Книге джунглей”?', 'Волки', 'Медведи', 'Лисы', 'Приматы')

const questions = [question1, question2, question3, question4, question5]