const counterElems = document.querySelectorAll('.counter')

function counter(elem, number) {

    const time = 200
    const step = number / time;
    let startStep = 0;

    const stepper = setInterval(() => {
        console.log('value')
        startStep = startStep + step;
        if (Math.ceil(startStep) <= number) {
            elem.innerHTML = Math.ceil(startStep)
        } else {
            clearInterval(stepper)
            elem.innerHTML = number
        }
    }, 10);
}

counter(counterElems[0], 3300)
counter(counterElems[1], 1000)
counter(counterElems[2], 9900)