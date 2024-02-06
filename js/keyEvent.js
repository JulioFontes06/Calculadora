let alowedkey = ['/', '*', '-', '+', '.', '0', '1','2','3','4','5','6','7','8','9']
let caracterOperation = ['/', '*', '-', '.', '+']

import { calculate } from "./math.js" 

 function keyEvent (ev) {
  if(alowedkey.includes(ev.key)){
      const currentInput = input.innerText
      const selectedKey = ev.key
      
      let isOperationKey = caracterOperation.includes(currentInput.slice(-1))

      if(caracterOperation.includes(selectedKey) && isOperationKey){
          input.innerText = currentInput.slice(0, -1) + ev.key
          return
      }

      input.innerText += ev.key
  }

  if(ev.key === 'Enter'){
      calculate()
  }

  if(ev.key === 'Backspace'){
      input.innerText = input.innerText.slice(0, -1)
  }
}

export { keyEvent, caracterOperation }