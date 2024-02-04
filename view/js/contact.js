const sideBar = document.querySelector('.ada');
sideBar.addEventListener('click', function() {
    const menu = document.querySelector('.ada');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('.main');
    navbar.classList.toggle('aktif');
    menu.classList.toggle('aktif');
    main.classList.toggle('geser');
})

const back = document.querySelector('.back');
back.addEventListener('click', function() {
    const menu = document.querySelector('.ada');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('.main');
    const head  = document.querySelector('.head');
    navbar.classList.toggle('aktif');
    menu.classList.toggle('aktif');
    main.classList.toggle('geser');
    head.classList.toggle('widht100');
})
