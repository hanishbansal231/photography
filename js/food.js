let navbar = document.querySelector('.navbar');
document.querySelector('#menu_btn').onclick = () =>{
    navbar.classList.toggle('active');
} 

let account_user = document.querySelector('.user_account');
document.querySelector('#user_btn').onclick=()=>{
    account_user.classList.toggle('active');
}

let close_user_account = document.querySelector('.user_account');
document.querySelector('.close_btn').onclick=()=>{
    close_user_account.classList.remove('active');
}

let my_order = document.querySelector('.my_order');
document.querySelector('#order_btn').onclick=()=>{
    my_order.classList.toggle('active');
}

let close_order = document.querySelector('.my_order')
document.querySelector('.close_order').onclick=()=>{
    close_order.classList.remove('active');
}

let shopping_cart = document.querySelector('.shopping_cart');
document.querySelector('#cart_btn').onclick=()=>{
    shopping_cart.classList.toggle('active');
}
document.querySelector('.close_cart').onclick=()=>{
    shopping_cart.classList.remove('active');
}
window.onscroll =()=>{
    navbar.classList.remove('active');
    close_order.classList.remove('active');
    shopping_cart.classList.remove('active');
}
let slides = document.querySelectorAll('.home_bg .home .slide_container .slide');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
 }
 
 function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
 }