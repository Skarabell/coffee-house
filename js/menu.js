
const iconMenu = document.querySelector('.menu_btn');
const main = document.querySelector('.main');
const Menu = document.querySelector('.Menu');
const welcomeBtn = document.querySelector('.section-welcome__btn');
const menuItem = document.querySelectorAll('.navigation__item');
/*
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('_active');
        main.setAttribute('hidden', 'true');
        Menu.setAttribute('hidden', 'false');
    });
    menuItem.forEach((element) => {
        element.addEventListener('click', function (e) {
            if (iconMenu.classList.contains('_active'))
                iconMenu.classList.remove('_active');
            main.setAttribute('hidden', 'false');
            Menu.setAttribute('hidden', 'true');
        });
    });
}
*/

function openMenu() {
    console.log("click func active")

    iconMenu.addEventListener('click', function (e) {
        main.setAttribute('hidden', 'true');
        Menu.removeAttribute('hidden');
        console.log("click active")
    })

    iconMenu.addEventListener('click', function (e) {
        main.removeAttribute('hidden');
        Menu.setAttribute('hidden', 'true');
        console.log("click DEactive")
    })
}
