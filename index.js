// hamburger menu

var hamburgerIcon = document.querySelector(".hamburger-icon");
var ul = document.querySelector("ul");

hamburgerIcon.addEventListener("click",()=>{
   ul.classList.toggle('show')
});

function showCart(){
  var cart = "Your product is added";
  alert(cart);
}