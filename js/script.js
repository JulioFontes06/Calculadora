const input = document.getElementById('input')

const keyInput = document.querySelectorAll('.keyNumber')
const lastNumberDelet = document.getElementById('lastRemove')
const clearInput = document.getElementById('remove')
const calc = document.getElementById('equal')


clearInput.addEventListener('click', () => {
    input.innerText = ''
})

lastNumberDelet.addEventListener('click', () => {
    input.innerText = input.innerText.slice(0, -1)
})

let caracterOperation = ['/', '*', '-', '.', '+']


keyInput.forEach((key) => {
    key.addEventListener('click', () => {
        const currentInput = input.innerText
        const selectedKey = key.dataset.key
        
        let isOperationKey = caracterOperation.includes(currentInput.slice(-1))

        if(caracterOperation.includes(selectedKey) && isOperationKey){
            input.innerText = currentInput.slice(0, -1) + key.dataset.key
            return
        }

        input.innerText += key.dataset.key
    })
}
)

const calculate = () => {
    let result = eval(input.innerText)

    input.innerText = result

}

calc.addEventListener('click', calculate)




