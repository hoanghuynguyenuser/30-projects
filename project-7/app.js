const input = document.querySelector('.content ul input')
const btnRemove = document.querySelector('.btn-remove')

listTag = ['NodeJs', 'ReactJs']

function renderTag(tag) {
        input.insertAdjacentHTML(
            "beforebegin", 
            `<li class="tag">${tag}
                <i class="fas fa-times"></i>
            </li>`)
}

function createNewTag(renderTag, removeTag) {
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            let tag = input.value
            input.value = null;
            renderTag(tag)
            removeTag()
        }
    })
}

function removeTag() {
    var closeElements = document.querySelectorAll('.tag i')
    closeElements.forEach(closeElement => {
        closeElement.addEventListener('click', function(e) {
            e.currentTarget.parentElement.remove()
        })
    })
}

function clearTag() {
    const tagElements = document.querySelectorAll('.tag')
    tagElements.forEach(tagElement => tagElement.remove())
}

function start(callback) {
    listTag.forEach(tag => renderTag(tag)); 
    removeTag()
    createNewTag(renderTag, removeTag)
    btnRemove.addEventListener('click', clearTag) 
}

start()