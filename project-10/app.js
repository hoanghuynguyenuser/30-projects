
const input = document.querySelector('.input')
const add = document.querySelector('.add')
const list = document.querySelector('.list')
const form = document.querySelector('.form')


function renderUI(contentTodo) {
    let li = document.createElement('li')
    li.setAttribute('class', 'list__item')
    li.innerHTML =  `<p>${contentTodo}</p><i class="fas fa-trash"></i>`
    list.insertAdjacentElement("beforeend", li)

    li.querySelector('i').addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove()
        updateTodos()
    })
    
    li.addEventListener('click', (e) => {
        e.currentTarget.querySelector('p').classList.toggle('complete')
        updateTodos()
    })
}


function updateTodos() {
    let todoElements = document.querySelectorAll('.list .list__item p')
    let todos = []
    todoElements.forEach((todoElement) => {
        let todo = {
                    content: todoElement.innerText,
                    complete: todoElement.classList.contains('complete') ? true : false
                }  
        todos.push(todo)
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}


var todos = JSON.parse(localStorage.getItem('todos'))
todos.forEach((todo) => {
    let contentTodo = todo.content
    renderUI(contentTodo)
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    input.focus()
    if (input.value.trim() !== '') {
        let contentTodo = input.value
        renderUI(contentTodo)
        updateTodos()
        input.value = ''
    }
})



