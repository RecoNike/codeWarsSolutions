function validParentheses(parens){
  var arr = parens.split('')
  var rig = 0, lef = 0
  
  for(i = 0; i < arr.length; i++){
    if(arr[i] == '('){
      lef++  
    } 
    if(arr[i] == ')'){
      rig++  
      if(lef < rig) return false
    }
    
  }
  
  if(rig != lef) return false
  return true
}
