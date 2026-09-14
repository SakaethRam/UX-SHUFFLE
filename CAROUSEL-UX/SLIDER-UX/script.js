let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}


/*Transition*/
const logregBox = document.querySelector('.log-reg');
const prev = document.querySelector('.prv-btn');
const next = document.querySelector('.nxt-btn');
const logreg = document.querySelector('.log-reg-goal');
const previous = document.querySelector('.pre-btn');
const nex = document.querySelector('.net-btn');

next.addEventListener('click', () => {
    logregBox.classList.add('active')
});


prev.addEventListener('click', () => {
    logregBox.classList.remove('active')
});

nex.addEventListener('click', () => {
    logreg.classList.add('active')
});


previous.addEventListener('click', () => {
    logreg.classList.remove('active')
});



