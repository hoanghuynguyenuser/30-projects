const prevIcon = document.querySelector('.prev-icon')
const nextIcon = document.querySelector('.next-icon')
const wrapImg = document.querySelector('.wrap-img')
const listImg = document.querySelector('.list-img')

const people = [
    {
        id: 1,
        image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/275302147_388423073120712_6162919085060208811_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=ymX9kea0eikAX-PQjDO&tn=y-qhqn4gmhkVhkJ4&_nc_ht=scontent.fvca1-4.fna&oh=00_AT89W2BxQJSNk-P4puGJ57dCBxW93pEdkP8nFYxeaBG6Eg&oe=62311D4F'
    },
    {
        id: 2,
        image: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/275439445_388422726454080_7929688953280529449_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=D3yLJHnwdCMAX8iz9Cf&_nc_ht=scontent.fvca1-1.fna&oh=00_AT-e5bYp9Nuld7i5y5hLwVXqVD8hIK7OtEQ8kMcIGk-ydg&oe=6230FA7E'
    },
    {
        id: 3,
        image: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/274283118_1423220714782449_7653269430298648188_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=LmEQ_06pKJEAX9BJf00&_nc_ht=scontent.fvca1-2.fna&oh=00_AT9_ePo0L8m4j9k_-tdytnwZjvrKGuR9uRz178A9YL5lmw&oe=62322516'
    },
    {
        id: 4,
        image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/274517027_5162050790516172_7477528442792385276_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=ngoj-_EnHUEAX_rYdqR&tn=-xA1H1naA2p-FbYk&_nc_ht=scontent.fvca1-4.fna&oh=00_AT_w3Wvf1Qk_25T8EfDqXtC5PslAtHS2SZ27EC1Ghkd2Kg&oe=62319EED'
    },
    {
        id: 5,
        image: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/273762129_161919319511340_6029654707890027092_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=MY44QZowsA0AX-Z3yJU&_nc_ht=scontent.fvca1-1.fna&oh=00_AT8kcefs69tsr1M-YiE19vSb8cXeX5RHAhpTzyLJHXb0tQ&oe=623092A0'
    },
    {
        id: 6,
        image: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/274750286_744020533249487_2875918326803909186_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=PG2ss_2YjMcAX9XRoxQ&_nc_ht=scontent.fvca1-2.fna&oh=00_AT8bmxTQHtgG_HmB_4gDIp8A2qZKi3OsEr_w-dFAU1wgLA&oe=6231F9D9'
    },
    {
        id: 7,
        image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/275308085_388421686454184_2353731152228299002_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=NclZNDFWnloAX8YM3-o&_nc_ht=scontent.fvca1-4.fna&oh=00_AT8mmpmsVrAcM1Vz7oByF0VD9bJQ-H-wF04Tak4a4UEQrw&oe=6230EE09'
    },
    {
        id: 8,
        image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/275506782_167236315646307_1035615384606120272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=R0j9ZcJm1YgAX9ZHgeK&_nc_ht=scontent.fvca1-4.fna&oh=00_AT-YwOjnGnXIYZcSrpLEpr0kRdyWln3PlZrYyLaP56mKKw&oe=62319CE3'
    },
    {
        id: 9,
        image: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/273635989_5110810282306890_6049981718658921652_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=hkWmPD2KNCIAX_vInR6&tn=y-qhqn4gmhkVhkJ4&_nc_ht=scontent.fvca1-2.fna&oh=00_AT8R_DZ-NL6wiI7H1rFVbWFsEQx9pe9X4rfYsbkS6LxBFg&oe=6230FED2'
    },
]
let currentIndex = 0
let prevIndex

function checkIndex(index) {
    if (index > people.length - 1) return 0
    if (index < 0) return people.length - 1
    return index
}

function renderImg(index) {
    const oldImg = document.querySelector('.wrap-img img')
    const img = document.createElement('img')
    wrapImg.replaceChild(img, oldImg)
    img.src = people[index].image
    img.classList.add('effect')
}
function handleActive(prevIndex, currentIndex) {
    listItems[prevIndex].classList.remove('active')
    listItems[currentIndex].classList.add('active')
}
function handleImg(prevIndex, currentIndex) {
    currentIndex = checkIndex(currentIndex)
    renderImg(currentIndex)
    handleActive(prevIndex, currentIndex)
    return currentIndex
}

//render list item
const listValue = people.map((person, index) => {
    return `<div class="list-item">
                <img src=${person.image} alt="">
            </div>`
})
listImg.innerHTML = listValue.join('')
const listItems = document.querySelectorAll('.list-item')

//handle event list item
listItems.forEach((item, index) => 
    item.addEventListener('click', () => currentIndex = handleImg(currentIndex, index))
)

//handle click btn
nextIcon.addEventListener('click', () => currentIndex = handleImg(currentIndex, currentIndex + 1))
prevIcon.addEventListener('click', () => currentIndex = handleImg(currentIndex, currentIndex - 1))

renderImg(currentIndex)
