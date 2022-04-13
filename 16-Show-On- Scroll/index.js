const ElemShowOnScrolls = document.querySelectorAll('.show-on-scroll')

function isElemInViewport(elem) {
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const rect = elem.getBoundingClientRect()
    return rect.bottom > 0 && rect.top < viewportHeight
}

// function handleShowElem(elem) {
//     if (isElemInViewport(elem)) {
//         elem.classList.add('active')
//     } else elem.classList.remove('active')
// }

// function loop() {
//     ElemShowOnScrolls.forEach(elem => {
//         handleShowElem(elem)
//     })
// }

function loop() {
	ElemShowOnScrolls.forEach((item) => {
		if (isElemInViewport(item)) {
			item.classList.add('active')
		} else {
			item.classList.remove('active')
		}
	})
}

window.onscroll = loop
loop()