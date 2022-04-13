const productsEle = document.querySelector('.product')
const inputEle = document.querySelector('.header input')

const productItemsEles =[]


productsEle.innerHTML = `<h3>Loading...</h3>`

function filterProducts(value) {

}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        productsEle.innerHTML = ''
        products.forEach(product => {
            const {id, title, price, image} = product
            const div = document.createElement('div')
            div.className = 'product-item'
            productItemsEles.push(div)
            div.innerHTML = `<img src=${image} alt="">
                            <div class="product-info">
                                <h4>${title.substring(0, 25)}</h4>
                                <p>$${price}</p>
                            </div>`
        productsEle.appendChild(div)
        });
    })

//Filter products
inputEle.addEventListener('input', (e) => {
    filterProducts(e.target.value)
})



function filterProducts(value) {
    productItemsEles.forEach((item) => {      
      if (item.innerText.toLowerCase().includes(value.toLowerCase())) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
}
