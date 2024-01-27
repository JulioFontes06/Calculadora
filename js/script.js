const input = document.getElementById('input')

const keyInput = document.querySelectorAll('.keyNumber')
const lastNumberDelet = document.getElementById('lastRemove')
const clearInput = document.getElementById('remove')
const calc = document.getElementById('equal')

const changeTheme = document.getElementById('theme-change')

const keyTheme = document.querySelectorAll('.key')
const mainTheme = document.querySelector('main')

changeTheme.addEventListener('click', () => {
    const body = document.querySelector('body')
        changeTheme.classList.toggle('dark-theme-change-button')
        changeTheme.classList.toggle('light-theme-change-button')
    
        body.classList.toggle('dark-theme-body')
        body.classList.toggle('light-theme-body')

        mainTheme.classList.toggle('dark-theme-main')
        mainTheme.classList.toggle('light-theme-main')

        input.classList.toggle('dark-theme-input')
        input.classList.toggle('light-theme-input')

    keyTheme.forEach((key) => {
        key.classList.toggle('light-theme-button')
        key.classList.toggle('dark-theme-button')
    })
    
})

clearInput.addEventListener('click', () => {
    input.innerText = ''
})

lastNumberDelet.addEventListener('click', () => {
    input.innerText = input.innerText.slice(0, -1)
})

let caracterOperation = ['/', '*', '-', '.', '+']
let alowedkey = ['/', '*', '-', '+', '.', '0', '1','2','3','4','5','6','7','8','9']

addEventListener('keydown', (ev) => {
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
})

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




