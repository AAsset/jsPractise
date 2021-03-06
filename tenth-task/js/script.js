window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    Date.prototype.addDays = function(days) {
        var today = new Date(this.valueOf());
        today.setDate(today.getDate() + days);
        return today;
    }

    let deadline = new Date().addDays(5);

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
                hours.textContent = t.hours > 10 ? t.hours : '0' + t.hours;
                minutes.textContent = t.minutes > 10 ? t.minutes : '0' + t.minutes;
                seconds.textContent = t.seconds > 10 ? t.seconds : '0' + t.seconds;

            if (t.total <= 0) {
                clearInterval(timerInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModal() {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    more.addEventListener('click', function() {
        showModal();
    });

    function hideModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }
    close.addEventListener('click', function() {
        hideModal();
    });

    // onclik description-btn show modal

    document.body.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            showModal();
        }
    });

    // Второе задание
    
    // let age = document.getElementById('age'),
    //     userInfo = showUser.bind(age);
    // userInfo('Иванов', 'Иван');
	// function showUser(surname, name) {
	// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }

    // ES6 classes

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDOMElement() {
            const element = document.createElement('div');
            const timer = document.querySelector('.timer');
            timer.appendChild(element);
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            element.style.cssText = param;
        };
    }

    const objOptions = new Options(30, 100, 'red', 18, 'center');
    objOptions.createDOMElement();
});