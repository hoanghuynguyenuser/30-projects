const alert = document.querySelector('.alert')
const box = document.querySelector('.box')
const detailItems = document.querySelectorAll('.detail__item p:last-child')

document.addEventListener('keydown', function(e) {
    alert.classList.add('hidden')
    box.classList.remove('hidden')

    for (let i = 0; i < detailItems.length; i++) {
        switch (i) {
            case 0:
                let keyName = e.which === 32 ? 'Space' : `${e.key}`
                detailItems[i].innerText = keyName
                break
            case 1: 
                detailItems[i].innerText = `${e.location}`
                break
            case 2: 
                detailItems[i].innerText = `${e.which}`
                break
            case 3: 
                detailItems[i].innerText = `${e.code}`
                break
        }
    }
})

