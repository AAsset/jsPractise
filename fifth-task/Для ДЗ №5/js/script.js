let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item');
    menu.insertBefore(menuItem[2], menuItem[1]);

let lastMenuItem = document.createElement('li');
    lastMenuItem.classList.add('menu-item');
    lastMenuItem.innerHTML = 'Пятый пункт';

menu.appendChild(lastMenuItem);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';

let advertising = document.querySelector('.adv'),
    column = document.querySelectorAll('.column');
    column[1].classList.add('column-with-content');
    document.querySelector('.column-with-content').removeChild(advertising);

let reviews = prompt('Как вы относитесь к технике apple?', ''),
    answer = document.getElementById('prompt');
    answer.innerHTML = 'Как вы относитесь к технике apple?' + ' - ' + reviews;
