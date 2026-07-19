
function factorial(){
    
    let number = document.getElementById("number").value
  const display = document.getElementById("answer")
  let answer = undefined
  if (number == 0) {
    answer = 1
  } else{
  
    let temp = undefined
  
    for (var i = number - 1; i > 0 ; i--) {
      
      temp = number * i
      number = temp
      
    }
     answer = temp
  }

  console.log(answer)
  display.textContent = answer
}

