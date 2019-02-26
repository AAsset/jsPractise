"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forms = forms;

function forms() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    function postData(data) {
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.setRequestHeader('Conten-Type', 'application/x-www-form-urlencoded');

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4 && request.status === 200) {
            resolve();
          } else {
            reject();
          }
        };

        request.send(data);
      });
    }

    function clearInput() {
      for (var i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    var formData = new FormData(form);
    var obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    var json = JSON.stringify(obj);
    postData(json).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInput);
  });
}

;