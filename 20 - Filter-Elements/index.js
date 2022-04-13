const btns = document.querySelectorAll('.gallery button')
const menuItems = document.querySelectorAll('.menu-item')

function handleActiveBtn(indexActive) {
    btns.forEach((btn, index) => {
        if (indexActive === index) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    })
}
function renderGallery(value) {
    value = value.toLowerCase()
  
    menuItems.forEach(item => {
        if (item.classList.value.includes(value) || value === 'all food') {
            item.classList.remove('hidden')
        } else {
            item.classList.add('hidden')
        }
    })
}

    
handleActiveBtn(0)

btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        renderGallery(e.target.innerText)
        handleActiveBtn(index)
    })
})