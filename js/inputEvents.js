const input = document.getElementById('input')


let caracterOperation = ['/', '*', '-', '.', '+']

function inputEvent(ev) {
    
      const currentInput = input.innerText

      const key = ev.target
      
      let isOperationKey = caracterOperation.includes(currentInput.slice(-1))

      if(caracterOperation.includes(key.dataset.key) && isOperationKey){
          input.innerText = currentInput.slice(0, -1) + key.dataset.key
          return
      }

      input.innerText += key.dataset.key
  }

  const clearInputSection = () => {
    input.innerText = "";
  }

  const clearLastElement = () => {
    input.innerText = input.innerText.slice(0, -1);
  }



export { inputEvent, clearInputSection, clearLastElement }