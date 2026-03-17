const btnMenu = document.getElementById('btn_menu');
const menuMobile = document.getElementById('menu_mobile');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('open');

    menuMobile.classList.toggle('translate-x-full');
    menuMobile.classList.toggle('translate-x-0');
}

);