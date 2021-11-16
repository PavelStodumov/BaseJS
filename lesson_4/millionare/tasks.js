let task = {
  getTasks() {
    do {
      console.clear()
      for (let question of questions) {
        question.showQuestion()
        question.showVariants()
        if (question.checkAnswer(player.getPlayerAnswer())) {
          player.showPoints()
          if (confirm('Играем дальше?') == true) {
            console.clear()
            continue
          } else {
            break
          }
        } else {
          break
        }
      }
      alert(`Конец игры! Ваш баланс ${player.points}`)
    } while (confirm('Играть ещё?') == true)
  }
}

