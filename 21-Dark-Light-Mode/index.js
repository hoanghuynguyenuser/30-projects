const inputElem = document.querySelector('#toggle-btn')
console.log(inputElem)

inputElem.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    document.querySelector('.circle').classList.toggle('active')
})