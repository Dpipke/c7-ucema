const menuButton = document.getElementById("menu")
const nav = document.getElementById("nav")
const closeButton = document.getElementById("close")

menuButton.addEventListener("click", function(){
    nav.style.display = "inline-block"
    closeButton.style.display = "inline-block"
    menuButton.style.display = "none"
})

closeButton.addEventListener("click", function(){
    nav.style.display = ""
    menuButton.style.display = ""
    closeButton.style.display = ""
})


//Featured Card render
const featuredProductsContainer = document.getElementById("featured-products-container")
const productsArray = [
    {
        name: "Airpods",
        price: 45868,
        url: "images/airpods.jpeg"
    },
    {
        name:"GoPro",
        price: 548521,
        url: "images/gopro.jpeg"
    },
    {
        name: "Mouse",
        price: 4535684,
        url: "images/mouse.jpeg"
    }
]

function renderCards(){
    productsArray.forEach(item => {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const price = document.createElement("p");
        const name = document.createElement("h3");
        const dataDiv = document.createElement("div");
        const button = document.createElement("a");

        name.innerText = item.name;
        price.innerText = item.price;
        img.src = item.url;
        img.alt = "foto " + item.name;
        button.innerText = "Comprar ahora";
        button.className = "btn";
        dataDiv.className = "product-data";
        card.className = "product-card"
        dataDiv.appendChild(name)
        dataDiv.appendChild(price)
        dataDiv.appendChild(button)
        card.appendChild(img)
        card.appendChild(dataDiv);
        featuredProductsContainer.appendChild(card)
    })
}

renderCards()

//Cotizacion dolar
function getConversionRate(){
    fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => {
        console.log( data)
        const venta = data.venta;
        const compra = data.compra;

        const ul = document.createElement("ul")
        const liCompra = document.createElement("li")
        const liVenta = document.createElement("li")

        liCompra.innerText = "Dolar - compra: " + compra;
        liVenta.innerText = "Dolar - venta: " + venta;
        ul.appendChild(liCompra);
        ul.appendChild(liVenta);

        const footer = document.getElementById("footer")
        footer.appendChild(ul)
    })
    .catch(error => console.log("Hubo un error "+ error))
}

getConversionRate()