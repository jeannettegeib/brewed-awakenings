import { getProducts } from "./database.js"

const products = getProducts()

//load price of product into a variable
const getPrice=(singleProduct)=>{
    let price =0;
    price = singleProduct.price;
    let formattedPrice=price.toFixed(2);
    return formattedPrice;
}

//build string that includes product name and price
const priceString =(paramPrice, paramProduct)=>{
    let htmlString ="";
    return htmlString =`${paramProduct.name} costs $${paramPrice}`
}

//add event listener showing product/price string when clicked
document.addEventListener(
    "click",
    (clickEvent)=>{
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")){
            const [,productId] = itemClicked.id.split("--")
                for (const product of products) {
                    if (product.id === parseInt(productId)) {
                    let Price=getPrice(product);
                    let stringPrice=priceString(Price, product)
                    window.alert(stringPrice)
                }
            }
        }
    }
)
//export the html string showing the products
export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        let Price=getPrice(product);
        let stringPrice=priceString(Price, product)

        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

