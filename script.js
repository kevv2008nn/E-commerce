let cart = [];
let total = 0;

// add product
function addToCart(name, price){

    cart.push(name);
    total = total + price;

    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to cart");
}

// show cart items
function loadCart(){

    let box = document.getElementById("cart-items");

    if(!box) return;

    box.innerHTML = "";

    box.innerHTML = box.innerHTML + cart.join("<br>");

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// buy function
function buyNow(){

    if(cart.length == 0){
        alert("Cart is empty");
        return;
    }

    alert("Order successful!");

    cart = [];
    total = 0;

    loadCart();

}