const productsContainer = document.querySelector('.menu-group');

async function getProducts(){
    const response = await fetch('./products.json')

    console.log(response)

    let id = response.id;
    console.log(id)

}