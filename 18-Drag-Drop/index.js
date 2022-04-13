const dragItem = document.querySelector('.draggable')
const boxItems = document.querySelectorAll('.item')


dragItem.addEventListener('dragstart', dragstart)

dragItem.addEventListener('dragend', dragend)

boxItems.forEach(box => {
    box.addEventListener('dragover', dragover)
    box.addEventListener('drop', drop)
})

function dragstart() {
    dragItem.classList.add('dragging')
}

function dragend() {
    dragItem.classList.remove('dragging')
}

function dragover(e) {
    e.preventDefault()
    this.appendChild(dragItem)
}

function drop() {
    this.appendChild(dragItem)
}