function narcissistic(value) {
  var str = value
  var mas = str.toString().split('')
  var sum = 0
  
  if(value <= 0) return false
  
  for(i = 0; i < mas.length; i++){
    sum += Math.pow(mas[i], mas.length)
  }
  if(parseInt(value) == parseInt(sum)) return true
  return false
}
