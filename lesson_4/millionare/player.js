'use strict'

let player = {
  playerAnswer() {
    
  },
  getPlayerAnswer(answer) {
    const letters = ['a', 'b', 'c', 'd']
    while (true){
      answer = prompt('Введите букву вашего ответа:').toLowerCase()
      
      if (letters.includes(answer)) {
        return answer
      }else {
        alert('Введите букву вашего варианта ответа')
      }
    }
  }
}