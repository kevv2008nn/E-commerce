let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name,price});
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
alert("Added to cart");
}

function updateCartCount(){
let count=document.getElementById("cart-count");
if(count){
count.innerText=cart.length;
}
}

function displayCart(){
let items=document.getElementById("cart-items");
let total=document.getElementById("total");

if(!items) return;

items.innerHTML="";
let sum=0;

cart.forEach(item=>{
let div=document.createElement("div");
div.innerText=item.name+" - ₹"+item.price;
items.appendChild(div);
sum+=item.price;
});

total.innerText="Total: ₹"+sum;
}

function buyNow(){
alert("Order placed!");
cart=[];
localStorage.removeItem("cart");
location.reload();
}

updateCartCount();
displayCart();