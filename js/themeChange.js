const changeTheme = document.getElementById('theme-change')


const keyTheme = document.querySelectorAll('.key')
const mainTheme = document.querySelector('main')

const themeAuteration = () => {
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
  
}

export { themeAuteration }