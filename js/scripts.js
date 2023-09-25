const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if (event.target.classList.contains('dont-touch') || event.target.classList.contains('booked')) {
        return;
    }

    event.target.classList.toggle('active');
    totalPriceTag.textContent = schemeSvg.querySelectorAll(".active").length * cost;
});

menuButton.addEventListener('click', ()=> {
    console.log("Нажато");
    menu.classList.toggle('is-open');
})

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});