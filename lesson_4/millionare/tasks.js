let task = {
  getTasks() {
    for (let question of questions) {
      console.log(question.text)
      
    }
  },
  getVariantsAnswers(question) {
    for (let variant of question.variants){
      console.log(variant)
    }
  }
}