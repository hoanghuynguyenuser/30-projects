const label = document.querySelector('label')
const input = document.querySelector('input')

input.addEventListener('change', (e) => {
    let img = document.createElement('img')
    const objectURL = URL.createObjectURL(e.target.files[0])
    img.src = objectURL
    label.appendChild(img)
})