const input = document.getElementById('input')

const keyInput = document.querySelectorAll('.keyNumber')
const lastNumberDelet = document.getElementById('lastRemove')
const clearInput = document.getElementById('remove')
const calc = document.getElementById('equal')


clearInput.addEventListener('click', () => {
    input.value = ''
})

lastNumberDelet.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})

let caracterOparation = ['/', 'x', '-', '.', '+']


keyInput.forEach((key) => {
    key.addEventListener('click', () => {
        input.value += key.dataset.key
    })
}
)

const calculate = () => {
    let result = eval(input.value)

    input.value = result

}

calc.addEventListener('click', calculate)




