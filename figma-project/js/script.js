/* Объявлем переменные */
let btnMenu = document.querySelector('.burger_menu')
let menu = document.querySelector('.menu')

/* Добавляем класс к меню по клику на кнопку */
btnMenu.addEventListener('click', function() {
    menu.classList.toggle('active')
})