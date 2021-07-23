function createPhoneNumber(numbers){
  var answer = []
  if(numbers.length == 10){
      answer.push("(")
    
      for(i = 0; i < 3; i++){
        answer.push(numbers[i])
      }
      answer.push(") ")
    
      for(i = 3; i < 6; i++){
        answer.push(numbers[i])
      }
          answer.push("-")
    }
        for(i = 6; i < numbers.length; i++){
        answer.push(numbers[i])
      }
  return answer.join('')
}
