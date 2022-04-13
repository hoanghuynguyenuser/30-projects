const searchBtn= document.querySelector('.search-btn')
const searchBox= document.querySelector('.search-box ')
const searchText= document.querySelector('.search-text')

searchBtn.addEventListener('click', function() {
    searchBox.classList.toggle('show')
    searchText.focus()
})