const body = document.querySelector('body')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range-bar')
const span = document.querySelector('span')

function renderRangeBar(rangeBarRatio) {
    // rangeBar.style.width = `${rangeBarRatio}%`
    rangeBar.setAttribute("style", `width: ${rangeBarRatio}%`)
    body.setAttribute("style", `background-color: rgba(0, 0, 0, ${rangeBarRatio/100})`)
    span.innerText = `${rangeBarRatio}%`
}

range.addEventListener('mousemove', function(e) {
    const rangeBarWidth = e.pageX - this.offsetLeft;
    const rangeBarRatio = Math.ceil(rangeBarWidth/(this.offsetWidth)*100);
    renderRangeBar(rangeBarRatio)
})
