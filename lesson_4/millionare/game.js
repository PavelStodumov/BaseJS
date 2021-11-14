'use strict'

let game = {
  start() {
    
    task.getTasks()
    task.getVariantsAnswers(question1)
    
  },
  init() {
    console.log('Игра "Кто хочет стать миллионером". Чтобы играть введи game.start()');
  }
}

game.init()