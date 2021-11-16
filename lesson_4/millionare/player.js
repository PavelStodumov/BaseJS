'use strict'

class Player {
  constructor(points) {
    this.points = points
  }
  showPoints() {
    console.log(`${'$'.repeat(10)} Ваш баланс: ${this.points} ${'$'.repeat(10)}В`)
  }
  addPoints() {
    this.points += 200000
  }
  getPlayerAnswer(answer) {
    const letters = ['a', 'b', 'c', 'd']
    while (true) {
      answer = prompt('Введите букву вашего ответа, или "Отмена" для выхода')
      if (answer == null) {
        alert('До свидания')
        console.log('Вы вышли из игры')
        return null
      }
      if (letters.includes(answer.toLowerCase())) {
        return answer.toUpperCase()
      } else {
        alert('Введите букву вашего варианта ответа')
      }
    }
  }
}

let player = new Player(0)











// let player = {
//   playerPoints() {
//     let points = 0
//   },
//   getPlayerAnswer(answer) {
//     const letters = ['a', 'b', 'c', 'd']
//     while (true) {
//       answer = prompt('Введите букву вашего ответа')
//       if (answer == null) {
//         alert('До свидания')
//         console.log('Вы вышли из игры')
//         return null
//       }
//       if (letters.includes(answer.toLowerCase())) {
//         return answer.toUpperCase()
//       } else {
//         alert('Введите букву вашего варианта ответа')
//       }
//     }
//   }
// }