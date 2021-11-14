'use strict'

let player = {
  playerAnswer() {
    
  },
  getPlayerAnswer(answer) {
    while (true){
      answer = prompt('Введите букву вашего ответа:').toLowerCase()
      const letters = ['a', 'b', 'c', 'd']
      if (letters.includes(answer)) {
        return answer
      }else {
        alert('Введите букву вашего варианта ответа')
      }
    }
  }
}